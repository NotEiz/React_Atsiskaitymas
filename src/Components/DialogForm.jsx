import { useContext } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import RegisterForm from "./RegisterForm";
import { DialogContext } from "../contexts/dialogContext";
import Button from "./Button";

const StyledButton = styled(Button)`
  width: 150px;
`;

const DialogForm = () => {
  const { open, setOpen } = useContext(DialogContext);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: "150px" }}>
      <StyledButton>Sign In</StyledButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ padding: "0" }}>
          <RegisterForm />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default DialogForm;
