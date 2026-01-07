import { auth } from "../js/firebase-config.js";
import { signInWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const form = document.getElementById("loginForm");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((err) => {
      error.textContent = "Acceso no autorizado";
      console.error(err);
    });
});
