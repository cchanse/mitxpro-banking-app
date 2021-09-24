import React from "react";
import UserContext from "./context";
import { Card, Table } from "react-bootstrap";

const AllData = () => {
  const ctx = React.useContext(UserContext);

  return (
    <Card>
      <Card.Title>All User Data</Card.Title>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {ctx.users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.balance}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default AllData;
