import React from 'react';
import Nav from "../components/Nav";
import Footer from '../components/Footer';

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