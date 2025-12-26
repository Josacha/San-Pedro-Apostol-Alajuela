let diaActual = new Date();

// Objeto de agenda principal
const agenda = {};

/**
 * Llena la agenda automáticamente para un año específico
 */
function programarCalendarioAnual(anio) {
    const inicio = new Date(anio, 0, 1);
    const fin = new Date(anio, 11, 31);

    for (let d = new Date(inicio); d <= fin; d.setDate(d.getDate() + 1)) {
        const diaSemana = d.getDay(); // 0: Dom, 1: Lun, 2: Mar, 3: Mie, 4: Jue, 5: Vie, 6: Sab
        const fechaStr = d.toISOString().split("T")[0];

        if (diaSemana === 0) { 
            // DOMINGOS
            agenda[fechaStr] = [
                { hora: "7:00 a.m.", evento: "Misa Dominical", icono: "fa-church" },
                { hora: "9:00 a.m.", evento: "Misa Dominical", icono: "fa-church" },
                { hora: "11:00 a.m.", evento: "Misa Dominical", icono: "fa-church" },
                { hora: "5:00 p.m.", evento: "Misa Dominical", icono: "fa-church" }
            ];
        } else if (diaSemana === 6) { 
            // SÁBADOS
            agenda[fechaStr] = [
                { hora: "4:00 p.m.", evento: "Misa de Vísperas", icono: "fa-church" },
                { hora: "6:00 p.m.", evento: "Misa de Vísperas", icono: "fa-church" }
            ];
        } else {
            // LUNES A VIERNES (Días entre semana)
            agenda[fechaStr] = [
                { hora: "9:00 a.m.", evento: "Atención oficina parroquial", icono: "fa-building" },
                { hora: "6:00 p.m.", evento: "Misa entre semana", icono: "fa-wine-glass" }
            ];
        }
    }
}

// Ejecutamos la programación para el año actual y el siguiente
programarCalendarioAnual(2025);
programarCalendarioAnual(2026);

/**
 * Formatea la fecha para buscarla en el objeto agenda
 */
function formatearFecha(fecha) {
    // Ajuste para evitar desfases de zona horaria
    const tzOffset = fecha.getTimezoneOffset() * 60000;
    return new Date(fecha - tzOffset).toISOString().split("T")[0];
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

document.addEventListener("DOMContentLoaded", mostrarAgenda);
