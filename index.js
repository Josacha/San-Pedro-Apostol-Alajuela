
document.addEventListener("DOMContentLoaded", function () {

    const parroco = document.getElementById("parroco-nombre");

    if (!parroco) return;

    // Fecha: 5 de enero 2026 (hora segura)
    const fechaCambio = new Date(2026, 0, 4); // enero = 0
    const hoy = new Date();

    if (hoy >= fechaCambio) {
        parroco.textContent = "Pbro. José Daniel Vargas Arias";
    }

});



