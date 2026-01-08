import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
  orderBy,
  query
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function cargarAvisos() {
  const contenedor = document.getElementById("avisos");
  contenedor.innerHTML = "<p>Cargando avisos...</p>";

  const q = query(collection(db, "avisos"), orderBy("fecha", "desc"));
  const snap = await getDocs(q);

  contenedor.innerHTML = `
    <h2><i class="fa-solid fa-bullhorn"></i> Avisos Parroquiales</h2>
  `;

  snap.forEach(docSnap => {
    const aviso = docSnap.data();

    contenedor.innerHTML += `
      <article class="aviso-item">
        <h3>
          <i class="fa-solid fa-bell"></i>
          ${aviso.titulo}
        </h3>
        <p>
          <i class="fa-solid fa-church"></i>
          ${aviso.mensaje}
        </p>
      </article>
    `;
  });
}
