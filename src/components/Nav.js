import React from 'react';
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
  h1 {
    color: rgb(242,242,242);
    margin-left: 15px;
  }
`;

const Nav = () => (
  <StyledNav>
    <h1><span style={{fontSize: `2rem`, display: `inline-block`, transform: `skew(-15deg)`, marginRight: `5px`, color: `#00CC7B`}}>&#36;</span> Budget MTG</h1>
  </StyledNav>
);

export default Nav;
