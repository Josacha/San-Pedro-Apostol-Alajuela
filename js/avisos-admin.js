import { db } from "./firebase-config.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const form = document.getElementById("formAviso");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const texto = document.getElementById("textoAviso").value.trim();

  if (!texto) return;

  await addDoc(collection(db, "avisos"), {
    texto,
    fecha: serverTimestamp()
  });

  mensaje.textContent = "✅ Aviso publicado correctamente";
  form.reset();
});
