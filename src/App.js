import logo from "./logo.svg";
import "./App.css";
import dashboard from "./dashboard";
import MenuPages from "./Pages/Menu";

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <dashboard></dashboard>
      </header> */}
      <MenuPages />
      {/* <dashboard /> */}
    </div>
  );
}

export default App;
