register.addEventListener("click", () => {
  const firstName = document.getElementById("firstName");
  const firstNameValue = firstName.value;
  const lastName = document.getElementById("lastName");
  const lastNameValue = lastName.value;
  const email = document.getElementById("email");
  const emailValue = email.value;
  const password = document.getElementById("password");
  const passwordValue = password.value;
  const confirmPassword = document.getElementById("confirmPassword");
  const confirmPasswordValue = confirmPassword.value;
  const register = document.getElementById("register");
  const registerValue = register.value;

  alert("Registration Successful!")
  if (passwordValue !== confirmPasswordValue) {
    alert("Passwords do not match. Please try again.")
  }

})
