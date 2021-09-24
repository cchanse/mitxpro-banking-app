import React from "react";
import UserContext from "./context";
import { Card, Button } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// creating validation schema
const withdrawSchema = Yup.object().shape({
  number: Yup.number()
    .required("A positive number is required")
    .positive()
    .integer(),
});

// setting the initial form values
const initialValues = {
  number: "",
};

const Withdraw = () => {
  const ctx = React.useContext(UserContext);

  const [success, setSuccess] = React.useState(false);
  const [balance, setBalance] = React.useState(ctx.users[0].balance);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Withdraw</Card.Title>
        <Card.Text>Balance: ${balance}</Card.Text>
        {success && (
          <Card.Text>You have successfully withdrawn money.</Card.Text>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={withdrawSchema}
          onSubmit={(values, { resetForm }) => {
            if (values.number <= balance) {
              setBalance(balance - values.number);
              setSuccess(true);
            } else {
              alert(
                "You do not have sufficient funds to withdraw this amount."
              );
              setSuccess(false);
            }
            resetForm();
          }}
        >
          {(formik) => {
            const { isValid, dirty } = formik;
            return (
              <Form>
                <div className="form-group">
                  <label for="number">Withdraw Amount</label>
                  <Field
                    className="form-control"
                    type="number"
                    name="number"
                    placeholder=""
                  />
                  <ErrorMessage name="number" component="div" />
                </div>

                <Button type="submit" disabled={!(dirty && isValid)}>
                  Withdraw
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Card.Body>
    </Card>
  );
};

export default Withdraw;
