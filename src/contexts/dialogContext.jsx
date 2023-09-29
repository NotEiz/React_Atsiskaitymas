import PropTypes from "prop-types";
import { createContext, useState } from "react";

const DialogContext = createContext();

const DialogProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

DialogProvider.propTypes = {
  children: PropTypes.node,
};

export { DialogProvider, DialogContext };
