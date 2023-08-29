let form = document.getElementById('contact-form');
let email = document.getElementById("email");
let invalidEmail = document.getElementById('invalid-email');
let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function checkEmail() {
    if (email.value == 0) {
      invalidEmail.textContent = "Fill in the field";
    } else if (!email.value.match(emailPattern)) {
      invalidEmail.textContent = "Email is not correct";
    } else {
      invalidEmail.textContent = "";
    }
  }
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    checkEmail();
  })
  