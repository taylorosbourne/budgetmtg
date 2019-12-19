import React from 'react';
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Nav/>
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