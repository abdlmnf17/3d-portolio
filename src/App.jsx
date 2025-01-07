// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/test" exact component={Dashboard} />
        {/* Tambahkan route lainnya di sini */}
      </Switch>
    </Router>
  );
};

export default App;
