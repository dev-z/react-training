import React from 'react';
import logo from './logo.svg';
import './App.css';

// import Greeting from "./components/Greeting";
// import Clock from "./components/Clock";
// import Conditional from './components/Conditional';
// import Repetitive from './components/Repetitive';
// import EventHandling from './components/EventHandling';
// import FormOne from './components/FormOne';
// import FormTwo from './components/FormTwo';
import LifingState from "./components/LiftingState";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        {/* <Clock /> */}
        {/* <Conditional /> */}
        {/* <Repetitive /> */}
        {/* <EventHandling /> */}
        {/* <FormOne /> */}
        {/* <FormTwo /> */}
        <LifingState />
      </header>
    </div>
  );
}

export default App;
