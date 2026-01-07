import { auth } from "../js/firebase-config.js";
import { onAuthStateChanged } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // ❌ No hay sesión → fuera
    window.location.href = "login.html";
  }
});
