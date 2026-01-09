import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
  orderBy,
  query
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function cargarAvisosFiliales() {
  const contenedor = document.getElementById("avisos-filiales-contenedor");

  contenedor.innerHTML = "<p>Cargando avisos...</p>";

  const q = query(
    collection(db, "avisosFiliales"),
    orderBy("fecha", "desc")
  );

  const snap = await getDocs(q);

  contenedor.innerHTML = "";

  snap.forEach(doc => {
    const aviso = doc.data();

    contenedor.innerHTML += `
      <article class="aviso-filial">
        <h3>${aviso.titulo}</h3>
        <p>${aviso.mensaje}</p>
      </article>
    `;
  });
}
