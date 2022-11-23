/* Importing the React library. */
import React from 'react';

//styled 
import styled from 'styled-components';

// utils
import { Colors } from '../../utils/styleColors/Colors';

export default function FeatureElement({ icon, altText, title, description }) {
  return (
   <StyledFeatureElement>
      <FeatureElementIcon src={icon} alt={altText} />
    <FeatureElementTitle>{title}</FeatureElementTitle>
    <FeatureElementDescription>{description}</FeatureElementDescription>
   </StyledFeatureElement>
  )
}

const StyledFeatureElement = styled.article`
flex: 1;
padding: 2.5rem;
`;

const FeatureElementIcon = styled.img`
width: 100px;
border-radius: 50%;
border: 10px solid ${Colors.green};
padding: 1rem;
display: block;
margin : 0 auto;
`;

const FeatureElementTitle = styled.h3`
color: #222;
font-size: 1.25rem;
font-weight: bold;
margin-bottom: 0.5rem;
text-align: center;
`;

const FeatureElementDescription = styled.p`
text-align: center;
`;


