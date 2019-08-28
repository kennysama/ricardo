import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import MainTemplate from './Template/MainTemplate/mainTemplate';

function App() {
  return (
    <div className="App">
            <Router>
      <header className="App-header">
  
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <Link to={`/about`}>Props v. State</Link>
        </p>
 
   
        <Route path="/about" component={MainTemplate} />

 
      </header>
      </Router>
    </div>
  );
}

export default App;
