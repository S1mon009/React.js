import { useState } from "react";
import { useFormik } from "formik";
import { Box, TextField, Stack, Button, Snackbar } from "@mui/material";
import Action from "./components/action";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import { initialValues, validationSchema } from "./formikSettings";
import { onSubmit, onReset } from "./formikActions";

const RightSide = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  function handleShowSnackbar() {
    setShowSnackbar(true);
  }

  function handleCloseSnackbar(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setShowSnackbar(false);
  }
  let formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit.bind(null, handleShowSnackbar),
    onReset: onReset,
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
    >
      <Snackbar
        open={showSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        message="Message succesfull send"
        action={<Action handleCloseSnackbar={handleCloseSnackbar} />}
      />
      <div className="row">
        <div className="col">
          <TextField
            error={Boolean(formik.errors.firstNameRequired)}
            required
            id="firstNameRequired"
            label="First name"
            helperText={formik.errors.firstNameRequired}
            onChange={formik.handleChange}
            value={formik.values.firstNameRequired}
          />
        </div>
        <div className="col">
          <TextField
            error={Boolean(formik.errors.lastNameRequired)}
            required
            id="lastNameRequired"
            label="Last name"
            helperText={formik.errors.lastNameRequired}
            onChange={formik.handleChange}
            value={formik.values.lastNameRequired}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <TextField
            error={Boolean(formik.errors.emailRequired)}
            required
            id="emailRequired"
            label="Email"
            helperText={formik.errors.emailRequired}
            type="email"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.emailRequired}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-3">
          <TextField
            id="phoneNumberCode"
            select
            label="Code"
            SelectProps={{
              native: true,
            }}
            onChange={formik.handleChange}
            value={formik.values.phoneNumberCode}
            sx={{ width: 75 }}
          >
            {Array.from({ length: 100 }).map((_, index) => (
              <option key={`+${index}`} value={`+${index}`}>
                {`+${index}`}
              </option>
            ))}
          </TextField>
        </div>
        <div className="col-9">
          <TextField
            error={Boolean(formik.errors.phoneNumber)}
            id="phoneNumber"
            label="Phone number"
            helperText={formik.errors.phoneNumber}
            type="tel"
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <TextField
            error={Boolean(formik.errors.messageRequired)}
            required
            id="messageRequired"
            label="Message"
            helperText={formik.errors.messageRequired}
            multiline
            rows={4}
            fullWidth
            onChange={formik.handleChange}
            value={formik.values.messageRequired}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <Stack spacing={2} direction="row">
            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              Send
            </Button>
            <Button variant="outlined" endIcon={<DeleteIcon />} type="reset">
              Delete
            </Button>
          </Stack>
        </div>
      </div>
    </Box>
  );
};

export default RightSide;
