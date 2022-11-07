import React, { useState } from "react";

// style component
import styled from "styled-components";

// components
import Button from "../components/Design/Button";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

// utils
import { Colors } from "../utils/styleColors/Colors";

export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  const handleInput = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  return (
    <StyledLogin>
      <Main>
        <LoginContent>
          <FontAwesomeIcon icon={faUserCircle} />
          <Title>Sign In</Title>
          {/* {error ? <Alert type="error" message={error} /> : null}*/}
          <LoginForm onSubmit={handleSubmit}>
            <LoginFormCategory>
              <LoginFormLabel htmlFor="username">E-mail</LoginFormLabel>
              <LoginFormInput
                type="email"
                id="email"
                value={inputs.email}
                onChange={handleInput}
              />
            </LoginFormCategory>
            <LoginFormCategory>
              <LoginFormLabel htmlFor="password">Password</LoginFormLabel>
              <LoginFormInput
                type="password"
                id="password"
                value={inputs.password}
                onChange={handleInput}
              />
            </LoginFormCategory>
            <LoginFormCategoryRecollect>
              <LoginFormInputRecollect type="checkbox" id="remember-me" />
              <LoginFormLabelRecollect htmlFor="remember-me">
                Remember me
              </LoginFormLabelRecollect>
            </LoginFormCategoryRecollect>
            <Button
              type="button"
              fullWidth={true}
              text="Sign In"
              underline={true}
            />
          </LoginForm>
        </LoginContent>
      </Main>
    </StyledLogin>
  );
}

const StyledLogin = styled.div``;
const Main = styled.main`
  background-color: ${Colors.darkBlue};
  padding: 2.4rem 0;
`;
const LoginContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  padding: 2rem;
`;
const Title = styled.h1``;
const LoginForm = styled.form``;
const LoginFormCategory = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;
const LoginFormCategoryRecollect = styled.div`
  display: flex;
`;
const LoginFormLabel = styled.label`
  font-weight: bold;
`;
const LoginFormLabelRecollect = styled.label`
  margin-left: 0.25rem;
`;
const LoginFormInput = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;
const LoginFormInputRecollect = styled.input`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;
