/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Web Dev 2022
        </p>
        <p>
        This is the A2 branch!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import Labs from "./labs";

import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";

function App() {
  return (
      <div className="container">
      <HelloWorld/>
        <Labs/>
          <Tuiter/>
      </div>
  );
}
export default App;


