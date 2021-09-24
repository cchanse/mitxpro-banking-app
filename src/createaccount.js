import React from "react";
import UserContext from "./context";
import { Card, Button } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// creating validation schema
const createAccountSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be a minimum of 8 characters")
    .required("Password is required"),
});

// setting the initial form values
const initialValues = {
  name: "",
  email: "",
  password: "",
};

const CreateAccount = () => {
  const ctx = React.useContext(UserContext);
  const [success, setSuccess] = React.useState(false);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Create Account</Card.Title>
        <Formik
          initialValues={initialValues}
          validationSchema={createAccountSchema}
          onSubmit={(values, { resetForm }) => {
            ctx.users.push({
              name: values.name,
              email: values.email,
              password: values.password,
            });
            setSuccess(true);
            resetForm();
          }}
        >
          {(formik) => {
            const { isValid, dirty } = formik;
            return (
              <Form noValidate>
                <div className="form-group">
                  <label for="name">Name</label>
                  <Field
                    className="form-control"
                    type="name"
                    name="name"
                    placeholder="Enter name"
                  />
                  <ErrorMessage name="name" component="div" />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <Field
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <Field
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                  />
                  <ErrorMessage name="password" component="div" />
                </div>
                <Button type="submit" disabled={!(dirty && isValid)}>
                  Create Account
                </Button>
              </Form>
            );
          }}
        </Formik>
        {success && <div>Successfully created account</div>}
      </Card.Body>
    </Card>
  );
};

export default CreateAccount;
