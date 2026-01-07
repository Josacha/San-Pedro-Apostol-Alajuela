import { auth, db } from "../js/firebase-config.js";
import { doc, getDoc } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

auth.onAuthStateChanged(async user => {
  const ref = doc(db, "usuarios", user.uid);
  const snap = await getDoc(ref);

  const rol = snap.data().rol;

  if (rol !== "parroco") {
    document.getElementById("menu-roles").style.display = "none";
  }
});

