import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  width: 60%;
  min-height: 100vh;
  padding: 30px 4vw 21px;
  background: #fff;
  margin: 0 auto;
  border-radius: 15px;
  h2 {
    font-weight: 200;
    text-transform: uppercase;
    margin-top: 25px;
    color: #00CC7B;
  }
  p {
    line-height: 1.5;
    font-size: 1.25rem;
    font-weight: 100;
  }
`;

const About = () => (
  <AboutSection>
    <h2>Why?</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <p>
      Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
      aliquip ex ea commodo consequat.
    </p>
    <br />
    <h2>For Magic Players</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <p>
      Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
      aliquip ex ea commodo consequat.
    </p>
    <br />
    <h2>For Developers</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <p>
      Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
      aliquip ex ea commodo consequat.
    </p>
    <br />
    <h2>Consider Donating</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <p>
      Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
      aliquip ex ea commodo consequat.
    </p>
  </AboutSection>
);

export default About;
