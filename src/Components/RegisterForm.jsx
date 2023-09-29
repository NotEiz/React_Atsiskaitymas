import styled from "styled-components";
import MainForm from "./Form";

import Image from "../images/formImage.png";

const StyledForm = styled.div`
  display: flex;

  img {
    width: 50%;
    object-fit: cover;
  }
`;

const RegisterForm = () => {
  return (
    <StyledForm>
      <img src={Image} alt="" />
      <MainForm />
    </StyledForm>
  );
};

export default RegisterForm;
