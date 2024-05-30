import * as Yup from "yup";

export let initialValues = {
  firstNameRequired: "",
  lastNameRequired: "",
  emailRequired: "",
  phoneNumberCode: "+0",
  phoneNumber: "",
  messageRequired: "",
};

export const validationSchema = Yup.object().shape({
  firstNameRequired: Yup.string("First name must be string").min(
    3,
    "First name must be 3 characters"
  ),
  lastNameRequired: Yup.string("Last name must be string").min(
    2,
    "Last name must be 2 characters"
  ),
  emailRequired: Yup.string().email("Invalid email"),
  phoneNumber: Yup.number("Phone number must be numeric"),
  messageRequired: Yup.string().max(
    300,
    "Message must be at most 300 characters"
  ),
});
