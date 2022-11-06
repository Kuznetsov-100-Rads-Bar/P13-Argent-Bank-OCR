import React from 'react';

// styled
import styled from 'styled-components';

// utils
import { Colors } from '../../utils/styleColors/Colors';

export default function Footer() {
  return (
    <StyledFooter>
          <FooterText>Copyright 2020 Argent Bank</FooterText>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
display: flex;
justify-content: center;
border-top: 2px solid ${Colors.lightGray};
padding: 2rem 0 1.5rem;
`;

const FooterText = styled.p`
margin: 0;
padding: 0;
`;