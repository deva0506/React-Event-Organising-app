import { Dialog } from "@mui/material";
import Login from "./Login";

const Modal = (props) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <Login handleClose={props.handleClose} />
    </Dialog>
  );
};

export default Modal;
