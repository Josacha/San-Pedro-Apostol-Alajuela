import { db } from "./firebase-config.js";
import { collection, addDoc, getDocs } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function guardarAviso(texto) {
  await addDoc(collection(db, "avisos"), {
    texto,
    fecha: new Date()
  });
}

export async function cargarAvisos() {
  const contenedor = document.getElementById("avisos");
  const querySnapshot = await getDocs(collection(db, "avisos"));

  contenedor.innerHTML = "";

  querySnapshot.forEach(doc => {
    contenedor.innerHTML += `<article class="aviso-item">${doc.data().texto}</article>`;
  });
}
