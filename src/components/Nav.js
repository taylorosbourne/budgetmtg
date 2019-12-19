import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  @import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');
  font-family: 'Bebas Neue', cursive;
  width: 100vw;
  height: 40px;
  background: rgb(42,42,42);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  a {
      text-decoration: none;
      :hover {
        h1 {
          color: #00CC7B;
        }
      }
    }
  h1 {
    transition: 0.3s ease;
    color: rgb(242,242,242);
    margin-left: 15px;
    transform: skew(-15deg);
  }
`;

const Nav = () => (
  <StyledNav>
    <Link to="/"><h1><span style={{fontSize: `2rem`, display: `inline-block`, marginRight: `5px`, color: `#00CC7B`}}>&#36;</span> Budget MTG</h1></Link>
  </StyledNav>
);

export default Nav;
