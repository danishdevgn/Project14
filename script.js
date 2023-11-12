const body = document.querySelector('body');
const modeToggle = document.getElementById('toggle');
function toggleMode() {
  body.classList.toggle('dark-mode');
}
modeToggle.addEventListener('click', toggleMode);
const items = document.querySelectorAll('.item:not(:first-child)');
const options = {
  threshold: 0.5
}
function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}
const openModalButton = document.getElementById("open-modal-button");
const closeModalButton = document.getElementById("close-modal-button");
const modal = document.getElementById("myModal");

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

const observer = new IntersectionObserver(addSlideIn, options)
items.forEach(item => {
  observer.observe(item);
})
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("submit-button");
const successMessage = document.getElementById("success-message");

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
messageInput.addEventListener("input", validateMessage);
contactForm.addEventListener("submit", submitForm);

function validateName() {
  if (nameInput.validity.valid) {
    nameInput.classList.remove("error");
    document.getElementById("name-error").style.display = "none";
  } else {
    nameInput.classList.add("error");
    document.getElementById("name-error").style.display = "block";
  }
  checkFormValidity();
}

function validateEmail() {
  if (emailInput.validity.valid) {
    emailInput.classList.remove("error");
    document.getElementById("email-error").style.display = "none";
  } else {
    emailInput.classList.add("error");
    document.getElementById("email-error").style.display = "block";
  }
  checkFormValidity();
}

function validateMessage() {
  if (messageInput.validity.valid) {
    messageInput.classList.remove("error");
    document.getElementById("message-error").style.display = "none";
  } else {
    messageInput.classList.add("error");
    document.getElementById("message-error").style.display = "block";
  }
  checkFormValidity();
}

function checkFormValidity() {
  if (nameInput.validity.valid && emailInput.validity.valid && messageInput.validity.valid) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", true);
  }
}
contactForm.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  if (nameInput.validity.valid && emailInput.validity.valid && messageInput.validity.valid) {
    successMessage.style.display = "block";
  }
}





