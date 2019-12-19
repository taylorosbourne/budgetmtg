import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Home from "./pages/Home";
import About from './pages/About';
import Layout from "./containers/Layout";
import './App.css';

const App = () => {
  return (
    <Router>
    <ScrollToTop />
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Layout>
  </Router>
  );
}

export default App;
