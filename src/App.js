import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Home from "./Components/Home";
import Employees from "./Components/Employees";

function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">

            <Link to="/employees">Сотрудники</Link>
            <Link to="/">Главная</Link>

          </header>
          <Route path="/employees" component={Employees}/>
          <Route path="/" component={Home}/>

        </div>
      </Router>
  );
}

export default App;
