import "./App.css";
import UserContext from "./context";
import { HashRouter, Route } from "react-router-dom";
import NavBar from "./navbar";
import Home from "./home.js";
import CreateAccount from "./createaccount";
import Deposit from "./deposit.js";
import Withdraw from "./withdraw.js";
import AllData from "./alldata.js";

const App = () => {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "user1",
              email: "user1@email.com",
              password: "password",
              balance: 100,
            },
          ],
        }}
      >
        <div className="container" style={{ padding: "20px" }}>
          <Route path="/" exact component={Home} />
          <Route path="/createaccount/" component={CreateAccount} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
};

export default App;
