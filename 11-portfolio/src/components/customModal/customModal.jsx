import { lazy } from "react";
const Modal = lazy(() => import("@mui/material/Modal"));
import { Box } from "@mui/material";
import "./customModal.scss";

const style = {
  bgcolor: "background.paper",
  border: "2px solid",
  borderColor: "divider",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
  maxHeight: "300px",
  overflow: "hidden",
};

const CustomModal = ({ open, setOpen, children }) => {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        keepMounted
      >
        <Box
          sx={style}
          className="position-absolute top-50 start-50 translate-middle modal-box"
        >
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
