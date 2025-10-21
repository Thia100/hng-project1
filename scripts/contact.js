const form = document.querySelector("form");

const fullNameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

const fullNameAlert = document.querySelector(
  '[data-testid="test-contact-error-name"]'
);
const emailAlert = document.querySelector(
  '[data-testid="test-contact-error-email"]'
);
const subjectAlert = document.querySelector(
  '[data-testid="test-contact-error-subject"]'
);
const messageAlert = document.querySelector(
  '[data-testid="test-contact-error-message"]'
);

const submitBtn = document.querySelector("#submit-button");
const submitSuccess = document.querySelector(
  '[data-testid="test-contact-success"]'
);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(errorElement, message) {
  errorElement.textContent = message;
  errorElement.style.display = "block";
}
function clearError(errorElement) {
  errorElement.textContent = "";
  errorElement.style.display = "none";
}

function validateFullName() {
  const value = fullNameInput.value.trim();
  if (value === "") {
    showError(fullNameAlert, "Full name is required");
    return false;
  }
  clearError(fullNameAlert);
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();

  if (value === "") {
    showError(emailAlert, "Email is required");
    return false;
  }

  if (!emailPattern.test(value)) {
    showError(
      emailAlert,
      "Please enter a valid email (e.g., name@example.com)"
    );
    return false;
  }

  clearError(emailAlert);
  return true;
}

function validateSubject() {
  const value = subjectInput.value.trim();

  if (value === "") {
    showError(subjectAlert, "Subject is required");
    return false;
  }

  clearError(subjectAlert);
  return true;
}

function validateMessage() {
  const value = messageInput.value.trim();

  if (value === "") {
    showError(messageAlert, "Message is required");
    return false;
  }

  if (value.length < 10) {
    showError(messageAlert, "Message must be at least 10 characters long");
    return false;
  }

  clearError(messageAlert);
  return true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  submitSuccess.style.display = "none";

  const isNameValid = validateFullName();
  const isEmailValid = validateEmail();
  const isSubjectValid = validateSubject();
  const isMessageValid = validateMessage();

  if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
    submitSuccess.textContent =
      "Thank you! Your message has been sent successfully.";
    submitSuccess.style.display = "block";
    submitSuccess.style.color = "green";

    form.reset();

    setTimeout(function () {
      submitSuccess.style.display = "none";
    }, 5000);
  }
});

fullNameInput.addEventListener("blur", validateFullName);
emailInput.addEventListener("blur", validateEmail);
subjectInput.addEventListener("blur", validateSubject);
messageInput.addEventListener("blur", validateMessage);

fullNameInput.addEventListener("input", () => clearError(fullNameAlert));
emailInput.addEventListener("input", () => clearError(emailAlert));
subjectInput.addEventListener("input", () => clearError(subjectAlert));
messageInput.addEventListener("input", () => clearError(messageAlert));
