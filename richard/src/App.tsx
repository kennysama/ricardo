import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import MainTemplate from './Template/MainTemplate/mainTemplate';

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/" component={MainTemplate} />
      </Router>
    </div>
  );
}

export default App;
