import React from 'react';
import styled from 'styled-components';

const StyledFormInput = styled.input`
  display: block; 
  margin-bottom: 25px;
  font-size: 1.25rem; 
  width: 100%;
  border: 0; 
  border-bottom: 1px solid rgb(142,142,142);
  :focus {
    outline: none;
    border-bottom: 1.5px solid #00CC7B;
  }
`;

const SearchContainer = styled.div`
  background: #fff;
  width: 100%;
  height: 500px;
  margin: 0px auto 35px;
  h2 {
    max-width: 100%;
    height: 20px;
    padding: 15px;
    border-bottom: 8px solid rgb(242,242,242);
    font-weight: 200;
    text-transform: uppercase;
  }
`;

const BottomCardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  h2 {
    max-width: 100%;
    height: 20px;
    padding: 0px 5px 15px 15px;
    border-bottom: 8px solid rgb(242,242,242);
    font-weight: 200;
    text-transform: uppercase;
  }
  @media(max-width: 955px) {
    flex-direction: column;
    * {
      margin-bottom: 35px;
    }
  }
`;

const RecentCards = styled.div`
  width: 48.5%;
  height: 600px;
  background: #fff;
  h2 {
    max-width: 100%;
    height: 20px;
    padding: 0px 5px 15px 15px;
    border-bottom: 8px solid rgb(242,242,242);
    font-weight: 200;
    text-transform: uppercase;
  }
  @media(max-width: 955px) {
    width: 100%;
  }
`;

const SignUpContainer = styled.div`
  width: 48.5%;
  height: 500px;
  background: #fff;
  @media(max-width: 955px) {
    width: 100%;
    height: 550px;
  }
`;

const Home = () => {
  return (
    <>
      <SearchContainer>
        <h2>Find the best cards at the best <span style={{color: `#00CC7B`}}>price&#36;</span></h2>
      </SearchContainer>
      <BottomCardsContainer>
        <RecentCards>
          <h2>Recent <span style={{color: `#00CC7B`}}>budget</span> alternates</h2>
        </RecentCards>
        <SignUpContainer>
            <h2><span style={{color: `#00CC7B`}}>Sign up</span> to contribute</h2>
            <form style={{padding: `22px`}}>
              <label for="email">Email</label>
              <StyledFormInput name="email" type="email" />
              <label for="confirmEmail">Confirm Email</label>
              <StyledFormInput name="confirmEmail" type="email" />
              <label for="password">Password</label>
              <StyledFormInput name="password" type="password" />
              <label for="confirmPassword">Confirm Password</label>
              <StyledFormInput name="confirmPassword" type="password" />
              <button style={{marginBottom: `25px`, fontSize: `1.5rem`, background: `#00CC7B`, color: `#fff`, padding: `10px 20px`, border: 0, cursor: `pointer`}}>Sign Up</button>
              <a style={{textDecoration: `none`, color: `#00CC7B`, display: `block`, cursor: `pointer`}}>Already have an account?  Log in</a>
            </form>
          </SignUpContainer>
       </BottomCardsContainer>
    </>
  );
};

export default Home;
