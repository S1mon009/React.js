import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import styles from "./customModal.module.scss";

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
  function handleClose() {
    setOpen(false);
  }

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
          className={`position-absolute top-50 start-50 translate-middle ${styles["modal-box"]}`}
        >
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
