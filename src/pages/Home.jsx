/* Importing the React library. */
import React from 'react';

// styled components
import styled from 'styled-components';

// assets
import BankTree from '../assets/bank-tree.jpeg';
import IconChat from "../assets/icon-chat.png";
import IconMoney from "../assets/icon-money.png";
import IconSecurity from "../assets/icon-security.png";
import FeatureElement from '../components/Feature/FeatureElement';

export default function HomePage() {
/* An array of objects. */
  const FeatureCardData = [
    {
      icon: IconChat,
      altText: "Chat feature",
      title: "You are our #1 priority",
      description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
      icon: IconMoney,
      altText: "Money feature",
      title: "More savings means higher rates",
      description: "The more you save with us, the higher your interest rate will be!"
    },
    {
      icon: IconSecurity,
      altText: "Security feature",
      title: "Security you can trust",
      description: "We use top of the line encryption to make sure your data and money is always safe."
    }
  ]
  return (
    <StyledHomePage>
      <Main>
        <Hero>
          <HeroContent>
            <HeroContentSrOnly>Promoted Content</HeroContentSrOnly>
            <HeroContentSubtitle>No fees.</HeroContentSubtitle>
            <HeroContentSubtitle>No minimum deposit.</HeroContentSubtitle>
            <HeroContentSubtitle>High interest rates.</HeroContentSubtitle>
            <HeroContentText>Open a savings account with Argent Bank today!</HeroContentText>
          </HeroContent>
        </Hero>
        <Features>
          <FeaturesSrOnly>Features</FeaturesSrOnly>
          {FeatureCardData.map((feature, index) => {
            return <FeatureElement key={index} icon={feature.icon} altText={feature.title} description={feature.description} title={feature.title} />
          })}
        </Features>
      </Main>
    </StyledHomePage>
  )
}

const StyledHomePage = styled.div``;
const Main = styled.main``;
const Hero = styled.div`
background-image: url(${BankTree});
background-position: 0 -50px;
background-size: cover;
background-repeat: no-repeat;
height: 300px;
position: relative;

@media (min-width: 920px) {
  height: 400px;
  background-position: 0% 33%;
}
`;

const HeroContent = styled.section`
position  relative;
background: white;
top: 2rem;
width: 200px;
padding: 2rem;
text-align: left;
margin: 0 auto;

@media (min-width: 920px) {
  position: absolute;
  top: 50px;
  right: 50px;
  width: 300px;
  margin: 2rem;
}
`;

const HeroContentSrOnly = styled.h2`
border: 0 !important;
clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
-webkit-clip-path: inset(50%) !important;
clip-path: inset(50%) !important; /* 2 */
height: 1px !important;
margin: -1px !important;
overflow: hidden !important;
padding: 0 !important;
position: absolute !important;
width: 1px !important;
white-space: nowrap !important; /* 3 */
`;

const HeroContentSubtitle = styled.p`
font-weight: bold;
font-size: 1rem;
margin: 0;

@media (min-width: 920px) {
  font-size: 1.5rem;
}
`;

const HeroContentText = styled.p`
margin-bottom: 0;
font-size: 0.9rem;

@media (min-width: 920px) {
    font-size: 1.2rem;
`;

const Features = styled.section`
display: flex;
flex-direction: column;

@media (min-width: 920px) {
    flex-direction: row;
}
`;

const FeaturesSrOnly = styled.h2`
border: 0 !important;
clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
-webkit-clip-path: inset(50%) !important;
clip-path: inset(50%) !important; /* 2 */
height: 1px !important;
margin: -1px !important;
overflow: hidden !important;
padding: 0 !important;
position: absolute !important;
width: 1px !important;
white-space: nowrap !important; /* 3 */
`;