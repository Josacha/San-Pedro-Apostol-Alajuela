import { auth } from "../js/firebase-config.js";
import { signInWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const form = document.getElementById("loginForm");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // ✅ AHORA SÍ bien obtenidos
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((err) => {
      if (err.code === "auth/user-not-found") {
        error.textContent = "❌ El correo no está registrado";
      } else if (err.code === "auth/wrong-password") {
        error.textContent = "❌ Contraseña incorrecta";
      } else {
        error.textContent = "❌ Acceso no autorizado";
      }
    });
});
