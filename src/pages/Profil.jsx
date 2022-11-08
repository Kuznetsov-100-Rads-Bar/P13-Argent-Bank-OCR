import React from "react";

// style component
import styled from "styled-components";

// utils
import { Colors } from "../utils/styleColors/Colors";

export default function Profil() {
  return (
    <StyledProfil>
      <Main>
        <ProfilHeader>
          <ProfilHeaderTitle>Welcome back</ProfilHeaderTitle>
          <ProfilHeaderName>Tony Jarvis!</ProfilHeaderName>
        </ProfilHeader>

        <ProfilAccount>
          <ProfilAccountContentWrapper>
            <ProfilAccountTitle>
              Argent Bank Checking (x8349)
            </ProfilAccountTitle>
            <ProfilAccountAmount>$2,082,79</ProfilAccountAmount>
            <ProfilAccountAmountDescription>
              Available Balance
            </ProfilAccountAmountDescription>
          </ProfilAccountContentWrapper>
          <ProfilAccountButtonWrapperCta>
            <ProfilAccountButtonTransaction>
              View transactions
            </ProfilAccountButtonTransaction>
          </ProfilAccountButtonWrapperCta>
        </ProfilAccount>

        <ProfilAccount>
          <ProfilAccountContentWrapper>
            <ProfilAccountTitle>Argent Bank Savings (x6712)</ProfilAccountTitle>
            <ProfilAccountAmount>$10,928,42</ProfilAccountAmount>
            <ProfilAccountAmountDescription>
              Available Balance
            </ProfilAccountAmountDescription>
          </ProfilAccountContentWrapper>
          <ProfilAccountButtonWrapperCta>
            <ProfilAccountButtonTransaction>
              View transactions
            </ProfilAccountButtonTransaction>
          </ProfilAccountButtonWrapperCta>
        </ProfilAccount>

        <ProfilAccount>
          <ProfilAccountContentWrapper>
            <ProfilAccountTitle>
              Argent Bank Credit Card (x8349)
            </ProfilAccountTitle>
            <ProfilAccountAmount>$184,30</ProfilAccountAmount>
            <ProfilAccountAmountDescription>
              Current Balance
            </ProfilAccountAmountDescription>
          </ProfilAccountContentWrapper>
          <ProfilAccountButtonWrapperCta>
            <ProfilAccountButtonTransaction>
              View transactions
            </ProfilAccountButtonTransaction>
          </ProfilAccountButtonWrapperCta>
        </ProfilAccount>
      </Main>
    </StyledProfil>
  );
}

const StyledProfil = styled.div``;

const Main = styled.main`
  flex: 1;
  background-color: ${Colors.darkBlue};
  padding: 0.3rem 0;
`;

const ProfilHeader = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`;

const ProfilHeaderTitle = styled.h1`
  margin: 20px 0 0 0;
`;

const ProfilHeaderName = styled.h2`
  margin: 0 0 20px 0;
`;

const ProfilAccount = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: colomn;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
`;

const ProfilAccountContentWrapper = styled.div`
  width: 100%;
  flex: 1;
`;

const ProfilAccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const ProfilAccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const ProfilAccountAmountDescription = styled.p`
  margin: 0;
`;

const ProfilAccountButtonWrapperCta = styled.div``;

const ProfilAccountButtonTransaction = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
`;
