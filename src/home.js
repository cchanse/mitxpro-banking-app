import logo from "./bank.png";
import React from "react";
import Card from "./bankcard";

const Home = () => {
  return (
    <Card
      txtcolor="black"
      header=""
      title="Welcome to this demo"
      text="Uses React to allow users to create accounts, deposit, and withdraw"
      body={<img src={logo} className="img-fluid" alt="" />}
    />
  );
};

export default Home;
