const validateForm = (formData, setFormErrors, formErrors) => {
  let valid = true;
  const newErrors = { ...formErrors };

  // Validate name length
  if (formData.name.length < 6 || formData.name.length > 20) {
    newErrors.name = "Name must be between 6 and 20 characters long";
    valid = false;
  } else if (!/^[a-zA-Z ]+$/.test(formData.name)) {
    // Check if name contains only letters and spaces
    newErrors.name = "Name should only contain letters and spaces";
    valid = false;
  } else {
    newErrors.name = "";
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}/;
  if (!emailRegex.test(formData.email)) {
    newErrors.email = "Invalid email format";
    valid = false;
  } else {
    newErrors.email = "";
  }

  // Validate phone
  const phoneRegex = /^0[0-9]{9}$/;
  if (!phoneRegex.test(formData.phone)) {
    newErrors.phone = "Invalid phone format";
    valid = false;
  } else {
    newErrors.phone = "";
  }

  // Validate password
  if (
    (formData.password && formData.password.length <= 12) ||
    formData.password.length === 0
  ) {
    newErrors.password = "Password must be more than 12 characters";
    valid = false;
  } else {
    newErrors.password = "";
  }

  setFormErrors(newErrors);
  return valid;
};

export default validateForm;
