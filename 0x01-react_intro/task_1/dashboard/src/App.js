import logo from "./Holberton-logo.jpg";
import "./App.css";

import { getFullYear, getFooterCopy } from "./utils"

function App() {
  return (
    <div className="App-con">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="holberton logo"/>
        <h1 className="App-title">School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p className="Footer-text">Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
