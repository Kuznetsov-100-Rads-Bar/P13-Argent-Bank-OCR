import React, { useState } from "react";

// style component
import styled from "styled-components";

// utils
import { Colors } from "../utils/styleColors/Colors";

export default function Profil() {
  const [isEditProfileFormOpen, setIsEditProfileFormOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <StyledProfil>
      <Main>
        {isEditProfileFormOpen ?
          <ProfilHeader>
            <ProfilHeaderTitle>Welcome back</ProfilHeaderTitle>
            <ProfilFormEdit onSubmit={(event) => handleSubmit(event)}>
              <ProfilFormEditInput>
                <ProfilInputWrapper>
                  <ProfilInputText tabIndex={1} placeholder={firstName} type="text" id="firstName" />
                  <EditProfileButton usage={"save"} tabIndex={3} type='submit'>Save</EditProfileButton>
                </ProfilInputWrapper>
                <ProfilInputWrapper>
                  <ProfilInputText tabIndex={2} placeholder={lastName} type="text" id="lastName" />
                  <EditProfileButton usage={"cancel"} tabIndex={4} type='reset' onClick={() => setIsEditProfileFormOpen(false)}>Cancel</EditProfileButton>
                </ProfilInputWrapper>
              </ProfilFormEditInput>
            </ProfilFormEdit>
          </ProfilHeader>
          :
          <ProfilHeader>
            <ProfilHeaderTitle>Welcome back</ProfilHeaderTitle>
            <ProfilHeaderName>Tony Jarvis!</ProfilHeaderName>
            <EditProfileButton usage={"edit"} type='button' onClick={() => setIsEditProfileFormOpen(true)}>Edit profile</EditProfileButton>
          </ProfilHeader>
        }
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #fff;
  margin-bottom: 2rem;
`;

const ProfilHeaderTitle = styled.h1`
  margin: 20px 0 10px 0;
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

const ProfilFormEdit = styled.form`

`;

const ProfilFormEditInput = styled.div`
  display: flex;
  // flex-direction: column;
  justify-content: center;
  gap: 16px;
  width: 75%;
  margin: 0 auto;
  max-width: 512px
`;

const EditProfileButton = styled.button`
    border: none;
    display: block;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    width: 128px !important;
    align-self: ${props => props.usage === "save" ? "flex-end" : props.usage === "cancel" ? "flex-start" : "center"};
`;

const ProfilInputText = styled.input`
  padding: 5px;
`;

const ProfilInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;

`;

