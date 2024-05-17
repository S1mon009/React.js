import { useFormik } from "formik";
import { Box, TextField, Stack, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

const RightSide = () => {
  const formik = useFormik({
    initialValues: {
      firstNameRequired: "",
      lastNameRequired: "",
      emailRequired: "",
      phoneNumberCode: "+0",
      phoneNumber: "",
      messageRequired: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    onReset: (values) => {
      values.firstNameRequired = "";
      values.lastNameRequired = "";
      values.emailRequired = "";
      values.phoneNumberCode = "+0";
      values.phoneNumber = "";
      values.messageRequired = "";
    },
  });
  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
    >
      <div className="row">
        <div className="col">
          <TextField
            required
            id="firstNameRequired"
            label="First name"
            onChange={formik.handleChange}
            value={formik.values.firstNameRequired}
          />
        </div>
        <div className="col">
          <TextField
            required
            id="lastNameRequired"
            label="Last name"
            onChange={formik.handleChange}
            value={formik.values.lastNameRequired}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <TextField
            required
            id="emailRequired"
            label="Email"
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
            id="phoneNumber"
            label="Phone number"
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
            required
            id="messageRequired"
            label="Message"
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
