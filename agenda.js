let diaActual = new Date();

// agenda de ejemplo
const agenda = {
    "2025-12-26": [
        { hora: "8:00 a.m.", evento: "Misa Dominical", icono: "fa-church" },
        { hora: "6:00 p.m.", evento: "Misa Vespertina", icono: "fa-wine-glass" }
    ],
    "2025-01-20": [
        { hora: "9:00 a.m.", evento: "Atención oficina parroquial", icono: "fa-building" }
    ],
    "2025-01-21": [
        { hora: "6:00 p.m.", evento: "Misa entre semana", icono: "fa-wine-glass" }
    ]
};

function formatearFecha(fecha) {
    return fecha.toISOString().split("T")[0];
}

function mostrarAgenda() {
    const fechaStr = formatearFecha(diaActual);
    const contenedor = document.getElementById("agenda-contenido");
    const tituloFecha = document.getElementById("fecha-actual");

    tituloFecha.textContent = diaActual.toLocaleDateString("es-CR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    contenedor.innerHTML = "";

    if (agenda[fechaStr]) {
        agenda[fechaStr].forEach(item => {
            contenedor.innerHTML += `
                <div class="agenda-item">
                    <p>
                        <i class="fa-solid fa-clock"></i>
                        <strong>${item.hora}</strong>
                    </p>
                    <p>
                        <i class="fa-solid ${item.icono}"></i>
                        ${item.evento}
                    </p>
                </div>
            `;
        });
    } else {
        contenedor.innerHTML = `
            <div class="agenda-item">
                <p>
                    <i class="fa-solid fa-circle-info"></i>
                    No hay actividades programadas.
                </p>
            </div>
        `;
    }
}

function cambiarDia(cantidad) {
    diaActual.setDate(diaActual.getDate() + cantidad);
    mostrarAgenda();
}

// esperar a que cargue el HTML
document.addEventListener("DOMContentLoaded", mostrarAgenda);
