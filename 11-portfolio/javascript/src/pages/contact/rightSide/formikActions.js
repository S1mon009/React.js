export function onSubmit(handleShowSnackbar, values) {
  handleShowSnackbar();
}

export function onReset(values) {
  values.firstNameRequired =
    values.lastNameRequired =
    values.emailRequired =
    values.phoneNumber =
    values.messageRequired =
      "";
  values.phoneNumberCode = "+0";
}
