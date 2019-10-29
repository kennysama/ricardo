import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import ClientTemplate from './components/templates/Client/Client';
import AdminTemplate from './components/templates/Admin/Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home" component={ClientTemplate} />
        <Route path="/admin" component={AdminTemplate} />
      </Router>
    </div>
  );
}

export default App;
