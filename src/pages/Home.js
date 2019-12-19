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
  margin: 0px auto 35px;
  h2 {
    max-width: 100%;
    height: 20px;
    padding: 15px;
    border-bottom: 8px solid rgb(242, 242, 242);
    font-weight: 200;
    text-transform: uppercase;
    @media(max-width: 700px) {
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
    @media(max-width: 700px) {
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
  width: 48.5%;
  height: 600px;
  background: #fff;
  h2 {
    max-width: 100%;
    height: 20px;
    padding: 0px 5px 15px 15px;
    border-bottom: 8px solid rgb(242, 242, 242);
    font-weight: 200;
    text-transform: uppercase;
    @media(max-width: 700px) {
      font-size: 1.25rem;
    }
  }
  @media (max-width: 955px) {
    width: 100%;
  }
`;

const SignUpContainer = styled.section`
  width: 48.5%;
  height: 500px;
  background: #fff;
  @media (max-width: 955px) {
    width: 100%;
    height: 550px;
  }
`;

const CardsContentContainer = styled.div`
  width: 94%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media(max-width: 1000px){
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
  background: rgba(0,0,0,0.8);
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
  background: rgba(0,0,0,0.8);
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
  console.log(window.innerWidth)
return (
  <>
    <SearchContainer>
      <h2>
        <span style={{ color: `#00CC7B` }}>search</span> budget alternates
      </h2>
        <CardsContentContainer>
          <form style={window.innerWidth < `1000` ? {} : {width: `50%`}}>
          {/* <label for="cardName">Search Card</label> */}
          <StyledFormInput type="text" style={{fontSize: `2.5rem`, fontStyle: `italic`, width: `100%`, margin: `15px 0`}} placeholder="cyclonic rift..." />
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
          <div 
            style={{
              width: `45%`, 
              height: `100%`, 
              position: `relative`,
              // background: `tomato`
            }}
          >
            <CardPriceContainer>
              <ExpensiveCard src={TimeSpiral} alt="expensive-card" />
              <ExpensiveCardPrice>YIKES &#36;63</ExpensiveCardPrice>
            </CardPriceContainer>
            <CardPriceContainer>
              <CheapCard src={TimeReversal} alt="cheap-card" />
              <CheapCardPrice>NICE &#36;3</CheapCardPrice>
            </CardPriceContainer>
          </div>
        </CardsContentContainer>
    </SearchContainer>
    <BottomCardsContainer>
      <RecentCards>
        <h2>
          Recent <span style={{ color: `#00CC7B` }}>budget</span> alternates
        </h2>
      </RecentCards>
      <SignUpContainer>
        <h2>
          <span style={{ color: `#00CC7B` }}>Sign up</span> to contribute
        </h2>
        <form style={{ padding: `22px` }}>
          <label for="email">Email</label>
          <StyledFormInput name="email" type="email" />
          <label for="confirmEmail">Confirm Email</label>
          <StyledFormInput name="confirmEmail" type="email" />
          <label for="password">Password</label>
          <StyledFormInput name="password" type="password" />
          <label for="confirmPassword">Confirm Password</label>
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
}
export default Home;
