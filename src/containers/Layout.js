import React from 'react';
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from './Footer';
// import Header from '../containers/Header';

const Layout = ({ children }) => (
  <>
    <Nav/>
    {/* <Header /> */}
    <main
      style={{
        width: `80%`,
        margin: `50px auto`
      }}
    >
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;