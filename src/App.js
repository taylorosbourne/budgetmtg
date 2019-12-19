import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./containers/Layout";
import './App.css';

const App = () => {
  return (
    <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  </Router>
  );
}

export default App;
