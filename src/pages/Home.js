import React from 'react';
import styled from 'styled-components';
import TimeSpiral from '../assets/time-spiral.jpg';
import TimeReversal from '../assets/time-reversal.jpg';

const StyledFormInput = styled.input`
  display: block;
  margin-bottom: 25px;
  font-size: 1.25rem;
  width: 100%;
  border: 0;
  border-bottom: 1px solid rgb(142, 142, 142);
  :focus {
    outline: none;
    border-bottom: 1.5px solid #00cc7b;
  }
`;

const SearchContainer = styled.section`
  background: #fff;
  width: 100%;
  height: 500px;
  min-height: 500px;
  margin: 0px auto 35px;
  h2 {
    max-width: 100%;
    height: 20px;
    padding: 15px;
    border-bottom: 8px solid rgb(242, 242, 242);
    font-weight: 200;
    text-transform: uppercase;
    @media (max-width: 700px) {
      font-size: 1.25rem;
    }
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
    border-bottom: 8px solid rgb(242, 242, 242);
    font-weight: 200;
    text-transform: uppercase;
    @media (max-width: 700px) {
      font-size: 1.25rem;
    }
  }
  @media (max-width: 955px) {
    flex-direction: column;
    * {
      margin-bottom: 35px;
    }
  }
`;

const RecentCards = styled.section`
  width: 38%;
  height: 550px;
  background: #fff;
  h2 {
    max-width: 100%;
    height: 20px;
    padding: 0px 5px 15px 15px;
    border-bottom: 8px solid rgb(242, 242, 242);
    font-weight: 200;
    text-transform: uppercase;
    @media (max-width: 700px) {
      font-size: 1.25rem;
    }
  }
  ul {
    width: 100%;
    margin: 0;
    padding: 0;
    li {
      width: 90%;
      height: 60px;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 5px auto;
      border-bottom: 1px solid rgb(242,242,242);
      * {
        width: 33%;
        overflow: hidden;
      }
      a {
        font-size: 0.95rem;
      }
      span {
        color: #00cc7b;
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 955px) {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  @media(max-width: 1000px) {
    width: 100%;
  }
`;

const SignUpContainer = styled.section`
  width: 60%;
  height: 500px;
  background: #fff;
  @media (max-width: 955px) {
    width: 100%;
    height: 550px;
  }
`;

const CardsContainer = styled.div`
  width: 45%;
  height: 100%;
  position: relative;
  @media(max-width: 1015px) {
    display: none;
  }
`;

const CardsContentContainer = styled.div`
  width: 94%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const CardPriceContainer = styled.div`
  :hover {
    span {
      opacity: 1;
    }
  }
`;

const ExpensiveCard = styled.img`
  height: 90%;
  width: auto;
  position: absolute;
  top: 10px;
  left: 50px;
  border-radius: 15px;
  transition: 0.3s ease;
  :hover {
    transform: translateX(-15px);
  }
`;

const ExpensiveCardPrice = styled.span`
  display: inline-block;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  padding: 10px 20px;
  color: tomato;
  opacity: 0;
  transition: 0.3s ease;
`;

const CheapCardPrice = styled.span`
  display: inline-block;
  position: absolute;
  right: 35px;
  top: 25px;
  background: rgba(0, 0, 0, 0.8);
  padding: 10px 20px;
  color: #00cc7b;
  opacity: 0;
  transition: 0.3s ease;
`;

const CheapCard = styled.img`
  height: 90%;
  width: auto;
  position: absolute;
  top: 35px;
  right: 100px;
  border-radius: 15px;
  transition: 0.3s ease;
  :hover {
    transform: translateX(15px);
  }
`;

const Home = () => {
  return (
    <>
      <SearchContainer>
        <h2>
          <span style={{ color: `#00CC7B` }}>search</span> budget alternates
        </h2>
        <CardsContentContainer>
          <FormContainer>
            <form>
              <StyledFormInput
                type="text"
                autoFocus
                style={{
                  fontSize: `2.5rem`,
                  fontStyle: `italic`,
                  width: `100%`,
                  margin: `15px 0`
                }}
                placeholder="time spiral..."
              />
              <button
                style={{
                  marginBottom: `25px`,
                  fontSize: `1.5rem`,
                  background: `transparent`,
                  color: `#00CC7B`,
                  padding: `10px 20px`,
                  border: `1px solid #00CC7B`,
                  cursor: `pointer`
                }}
              >
                Search
              </button>
            </form>
            <p style={{lineHeight: `1.5`, fontSize: `1.25rem`}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </FormContainer>
          <CardsContainer>
            <CardPriceContainer>
              <ExpensiveCard src={TimeSpiral} alt="expensive-card" />
              <ExpensiveCardPrice>YIKES &#36;63</ExpensiveCardPrice>
            </CardPriceContainer>
            <CardPriceContainer>
              <CheapCard src={TimeReversal} alt="cheap-card" />
              <CheapCardPrice>NICE &#36;3</CheapCardPrice>
            </CardPriceContainer>
          </CardsContainer>
        </CardsContentContainer>
      </SearchContainer>
      <BottomCardsContainer>
        <RecentCards>
          <h2>
            Recent <span style={{ color: `#00CC7B` }}>budget</span> alternates
          </h2>
          <ul>
            <li>
              <a><span style={{color: `tomato`}} >&#36;63</span> Time Spiral</a>
              <span style={{textAlign: `center`}}>&rarr;</span>
              <a style={{textAlign: `right`}}>Time Reversal <span>&#36;3</span></a>
            </li>
            <li>
              <a><span style={{color: `#f7df1e`}} >&#36;10</span> Steelshaper's Gift</a>
              <span style={{textAlign: `center`}}>&rarr;</span>
              <a style={{textAlign: `right`}}>Open the Armory <span>&#36;2</span></a>
            </li>
            <li>
            </li>
            <li>
            </li>
            <li>
            </li>
            <li>
            </li>
          </ul>
          <div style={{width: `90%`, margin: `0 auto`, height: `80px`, display: `flex`, justifyContent: `flex-start`, alignItems: `center`}}>
            <a style={{color: `#00cc7b`}}>View All</a>
          </div>
        </RecentCards>
        <SignUpContainer>
          <h2>
            <span style={{ color: `#00CC7B` }}>Sign up</span> to contribute
          </h2>
          <form style={{ padding: `22px` }}>
            <label htmlFor="email">Email</label>
            <StyledFormInput name="email" type="email" />
            <label htmlFor="username">Username</label>
            <StyledFormInput name="username" type="text" />
            <label htmlFor="password">Password</label>
            <StyledFormInput name="password" type="password" />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <StyledFormInput name="confirmPassword" type="password" />
            <button
              style={{
                marginBottom: `25px`,
                fontSize: `1.5rem`,
                background: `#00CC7B`,
                color: `#fff`,
                padding: `10px 20px`,
                border: 0,
                cursor: `pointer`
              }}
            >
              Sign Up
            </button>
            <a
              style={{
                textDecoration: `none`,
                color: `#00CC7B`,
                display: `block`,
                cursor: `pointer`
              }}
            >
              Already have an account? Log in
            </a>
          </form>
        </SignUpContainer>
      </BottomCardsContainer>
    </>
  );
};
export default Home;
