import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function cargarAvisos() {
  const contenedor = document.getElementById("avisos-contenido");

  try {
    const q = query(
      collection(db, "avisos"),
      orderBy("fecha", "desc")
    );

    const snapshot = await getDocs(q);

    contenedor.innerHTML = "";

    if (snapshot.empty) {
      contenedor.innerHTML = "<p>No hay avisos publicados.</p>";
      return;
    }

    snapshot.forEach(doc => {
      const aviso = doc.data();

      contenedor.innerHTML += `
        <article class="aviso-item">
          <h3>${aviso.titulo}</h3>
          <p>${aviso.texto}</p>
        </article>
      `;
    });

  } catch (error) {
    contenedor.innerHTML = "<p>Error al cargar avisos.</p>";
    console.error(error);
  }
}
