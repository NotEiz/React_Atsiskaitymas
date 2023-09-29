import { useContext } from "react";
import { PropTypes } from "prop-types";
import styles from "./styledComponents/Button.module.scss";
import { DialogContext } from "../contexts/dialogContext";
const Button = ({ children }) => {
  const { setOpen } = useContext(DialogContext);

  return (
    <button className={styles.Button} onClick={() => setOpen(true)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  handleClickOpen: PropTypes.func,
};

export default Button;
