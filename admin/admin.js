import { auth } from "../js/firebase-config.js";
import { signInWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const form = document.getElementById("loginForm");
const error = document.getElementById("error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  error.textContent = "";

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "dashboard.html";
  } catch (err) {
    switch (err.code) {
      case "auth/user-not-found":
        error.textContent = "❌ El correo no está registrado";
        break;

      case "auth/wrong-password":
        error.textContent = "❌ La contraseña es incorrecta";
        break;

      case "auth/invalid-email":
        error.textContent = "❌ El formato del correo no es válido";
        break;

      case "auth/too-many-requests":
        error.textContent = "⚠️ Demasiados intentos. Intente más tarde";
        break;

      default:
        error.textContent = "❌ Acceso no autorizado";
        console.error(err);
    }
  }
});
