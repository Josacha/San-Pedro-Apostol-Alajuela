import { auth } from "../js/firebase-config.js";
import { signInWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const form = document.getElementById("loginForm");
const error = document.getElementById("error");

form.addEventListener("submit", e => {
  e.preventDefault();

  const email = email.value;
  const password = password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(() => {
      error.textContent = "Acceso no autorizado";
    });
});
