import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureStore } from '../store';

import styles from './App.module.scss';

import ClientTemplate from './templates/Client/Client';
import AdminTemplate from './templates/Admin/Admin';

const store = configureStore({});

function App() {
  return (
    <div className={styles.App}>
      <Provider store={store}>
        <Router>
          <Route path="/" component={ClientTemplate} />
          <Route path="/admin" component={AdminTemplate} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
