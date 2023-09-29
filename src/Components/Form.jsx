import { useContext } from "react";
import * as Yup from "yup";
import { BsPerson } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Typography, Box, Link } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { BiLockAlt } from "react-icons/bi";
import styles from "./styledComponents/From.module.scss";
import styled from "styled-components";
import Button from "./Button";
import { DialogContext } from "../contexts/dialogContext";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const StyledInput = styled(Field)`
  border: none;
  width: 100%;
`;

const StyledError = styled(ErrorMessage)`
  font-size: 0.7rem;
  color: red;
  margin-left: 1rem;
`;

const StyledInputBox = styled.div`
  border: 2px solid gray;
  display: Flex;
  align-items: center;
  padding: 3px 0 3px 1rem;
  border-radius: 5px;
  gap: 5px;
  margin-bottom: 10px;
  transition: all 200ms ease-in-out;

  &:hover {
    border-color: #f2877d;
    opacity: 0.7;
  }

  &:focus-within {
    border-color: #f2877d;
  }

  input {
    &:focus {
      outline: none;
    }
  }
`;

const StyledForm = styled(Form)`
  width: 100%;
  padding: 1rem;

  a {
    text-decoration: none;
    color: #f2877d;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const MainForm = () => {
  const handleSubmit = (values, formikHelpers) => {
    console.log(values);
    formikHelpers.resetForm();
    handleClose();
  };
  const { setOpen } = useContext(DialogContext);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Formik
      initialValues={{ email: "", password: "", name: "" }}
      onSubmit={handleSubmit}
      validationSchema={() =>
        Yup.object({
          name: Yup.string().required("Required").min(3),
          email: Yup.string().required("Required").email(),
          password: Yup.string()
            .required("Required")
            .matches(passwordRules, "Please create a stronger password"),
        })
      }
    >
      <StyledForm>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography variant="h5">Get Started</Typography>

          <Typography variant="subtitle2">Already have an account?</Typography>
          <Link>Log in</Link>
          <Box className={styles.signUp}>
            <Box className={styles.signUpButtons}>
              <FcGoogle />
              <Typography>sign up</Typography>
            </Box>

            <Box className={styles.signUpButtons} sx={{ bgcolor: "#4F70B5" }}>
              <FacebookRoundedIcon className={styles.faceBookIcon} />
              <Typography sx={{ color: "white" }}>sign up</Typography>
            </Box>
          </Box>
        </Box>
        <Typography variant="h5" sx={{ textAlign: "center", mt: "1rem" }}>
          Or
        </Typography>

        <Box>
          <Box display="flex" alignItems="flex-end">
            <label htmlFor="name">Name</label>
            <StyledError component="div" name="name" />
          </Box>

          <StyledInputBox>
            <BsPerson />
            <StyledInput name="name" placeholder="Erikas Plucas" />
          </StyledInputBox>
        </Box>

        <Box>
          <Box display="flex" alignItems="flex-end">
            <label htmlFor="email">Email</label>
            <StyledError component="div" name="email" />
          </Box>

          <StyledInputBox>
            <MdOutlineEmail />
            <StyledInput
              type="email"
              name="email"
              placeholder="Email@gmail.com"
            />
          </StyledInputBox>
        </Box>

        <Box>
          <Box>
            <Box display="flex" alignItems="flex-end">
              <label htmlFor="password">Password</label>
              <StyledError component="div" name="password" />
            </Box>

            <StyledInputBox>
              <BiLockAlt />
              <StyledInput
                type="password"
                name="password"
                placeholder="*********"
              />
            </StyledInputBox>
          </Box>
        </Box>

        <Button type="submit">Submit</Button>
      </StyledForm>
    </Formik>
  );
};

export default MainForm;
