import { db } from "../js/firebase-config.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const form = document.getElementById("formAvisoFilial");
const lista = document.getElementById("lista-avisos-filiales");

const tituloInput = document.getElementById("titulo");
const mensajeInput = document.getElementById("mensaje");

// ➕ Crear aviso
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const titulo = tituloInput.value.trim();
  const mensaje = mensajeInput.value.trim();

  if (!titulo || !mensaje) {
    alert("Completa todos los campos");
    return;
  }

  await addDoc(collection(db, "avisosFiliales"), {
    titulo,
    mensaje,
    fecha: new Date()
  });

  form.reset();
  cargarAvisos();
});

// 📥 Cargar avisos
async function cargarAvisos() {
  lista.innerHTML = "";

  const q = query(
    collection(db, "avisosFiliales"),
    orderBy("fecha", "desc")
  );

  const snap = await getDocs(q);

  snap.forEach(docSnap => {
    const aviso = docSnap.data();

    lista.innerHTML += `
      <div class="aviso-admin">
        <h3>${aviso.titulo}</h3>
        <p style="white-space: pre-line">${aviso.mensaje}</p>
        <button onclick="eliminarAviso('${docSnap.id}')">🗑 Eliminar</button>
      </div>
    `;
  });
}

// 🗑 Eliminar aviso
window.eliminarAviso = async (id) => {
  if (confirm("¿Eliminar este aviso?")) {
    await deleteDoc(doc(db, "avisosFiliales", id));
    cargarAvisos();
  }
};

cargarAvisos();
