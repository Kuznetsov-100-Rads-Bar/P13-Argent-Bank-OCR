import React from 'react'

// react-router-dom
import { Link, Routes } from 'react-router-dom';

// styled components
import styled from 'styled-components'

// assets
import ArgentBankLogo from '../../assets/argentBankLogo.png';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

// utils
import { Colors } from '../../utils/styleColors/Colors';

export default function Header() {
  return (
    <StyledHeader>
      <Navbar>
        <NavbarLogo to="/">
          <NavbarLogoImage src={ArgentBankLogo} alt="Argent Bank Logo" />
        </NavbarLogo>
        <NavbarList>
          <NavbarListElement>
            <NavbarListElementLink to={Routes.User}>
              <FontAwesomeIcon icon={faUserCircle} style={{ marginRight: "0.5rem" }} />
              Connected user
            </NavbarListElementLink>
          </NavbarListElement>

          <NavbarListElement>
            <NavbarListElementLink to={Routes.Home}>
              <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: "0.5rem" }} />
              Sign Out
            </NavbarListElementLink>
          </NavbarListElement>

          <NavbarListElement>
            <NavbarListElementLink to={Routes.Login}>
              <FontAwesomeIcon icon={faUserCircle} style={{ marginRight: "0.5rem" }} />
              Sign In
            </NavbarListElementLink>
          </NavbarListElement>
        </NavbarList>
      </Navbar>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
`;

const Navbar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px 20px;
`;

const NavbarLogo = styled(Link)`
display: flex;
align-items: center;
`;

const NavbarLogoImage = styled.img`
max-width: 100%;
width: 200px;
`;

const NavbarList = styled.ul`
margin: 0;
padding: 0;
display: flex;
list-style-type: none;
`;

const NavbarListElement = styled.li`
text-decoration: none;
margin: 0 0.5rem;
&:hover {
text-decoration: underline;
`;

const NavbarListElementLink = styled(Link)`
font-weight: 700;
text-decoration: none;
color: ${Colors.neutral};
&:hover {
text-decoration: underline;
`;