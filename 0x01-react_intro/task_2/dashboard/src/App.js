import logo from "./Holberton-logo.jpg";
import "./App.css";

import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App-con">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="holberton logo" />
        <h1 className="App-title">School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <div className="Email">
            <label for="email">Email</label>
            <input type="email" id="email"></input>
          </div>
          <div className="Password">
            <label for="password">Password</label>
            <input type="type" id="password"></input>
          </div>
          <button type="submit" className="Ok-btn">Ok</button>
        </form>
      </div>
      <div className="App-footer">
        <p className="Footer-text">
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;
