import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100vw;
  min-height: 200px;
  background: rgb(42, 42, 42);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const FooterNav = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px auto;
  a {
    text-decoration: none;
    color: rgb(242, 242, 242);
    font-family: "Raleway", sans-serif;
    transition: 0.3s ease;
    cursor: pointer;
    :hover {
      color: #00CC7B;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <FooterNav>
      <a>Home</a>
      <a>About</a>
      <a>Donate</a>
    </FooterNav>
    <div style={{width: `50%`, minWidth: `400px`, fontSize: `14px`, lineHeight: `1.5`, fontFamily: `'Raleway', sans-serif`, color: `rgb(142,142,142)`}}>
      <p style={{textAlign: `center`}}>
        This site is not affiliated nor produced nor endorsed by Wizards of the
        Coast. All card images, mana symbols, expansions and art related to Magic
        the Gathering is a property of Wizards of the Coast/Hasbro.
      </p>
      <p style={{textAlign: `center`}}>
        This site is
        not affiliated nor endorsed by Scryfall LLC. This site endeavours to
        adhere to the Scryfall data guidelines. 
      </p>
      <p style={{textAlign: `center`}}>
        All other content 2019 Budget MTG
      </p>
    </div>
  </StyledFooter>
);

export default Footer;
