// Contact Page

const fullNameEl = document.querySelector("#fullName");
const emailEl = document.querySelector("#email");
// const phoneEl = document.querySelector("#phone");
const messageEl = document.querySelector("#message1");
const form = document.querySelector("#formStyle");

const checkFullName = () => {
  let valid = false;

  const min = 5,
    max = 25;

  const fullName = fullNameEl.value.trim();
  console.log(fullName);

  if (!isRequired(fullName)) {
    showError(fullNameEl, "Full name cannot be blank.");
  } else if (!isBetween(fullName.length, min, max)) {
    showError(
      fullNameEl,
      `Full name must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(fullNameEl);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const checkMessage = () => {
  let valid = false;

  const min = 50,
    max = 200;

  const message1 = messageEl.value.trim();

  if (!isRequired(message1)) {
    showError(messageEl, "Your message cannot be blank.");
  } else if (!isBetween(message1.length, min, max)) {
    showError(
      messageEl,
      `Your message must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(messageEl);
    valid = true;
  }
  return valid;
};
const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  console.log("hola");
  e.preventDefault();

  // validate fields
  let isFullNameValid = checkFullName(),
    isEmailValid = checkEmail(),
    isMessageValid = checkMessage();
  // isConfirmPasswordValid = checkConfirmPassword();

  let isFormValid = isFullNameValid && isEmailValid && isMessageValid;
  //  &&
  // isConfirmPasswordValid;

  // submit to the server if the form is valid
  if (isFormValid) {
  }
});
