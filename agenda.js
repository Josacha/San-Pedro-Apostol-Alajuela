let diaActual = new Date();

// Objeto donde se almacenarán todas las fechas calculadas
const agenda = {};

/**
 * Genera automáticamente el calendario de todo el año
 * @param {number} anio - El año que se desea poblar (ej. 2025)
 */
function programarCalendarioAnual(anio) {
    const inicio = new Date(anio, 0, 1);
    const fin = new Date(anio, 11, 31);

    for (let d = new Date(inicio); d <= fin; d.setDate(d.getDate() + 1)) {
        const diaSemana = d.getDay(); // 0: Dom, 1: Lun, 2: Mar, 3: Mie, 4: Jue, 5: Vie, 6: Sab
        const fechaStr = d.toISOString().split("T")[0];

        if (diaSemana === 0) { 
            // --- DOMINGOS ---
            agenda[fechaStr] = [
                { hora: "7:00 a.m.", evento: "Misa Dominical", icono: "fa-church" },
                { hora: "9:00 a.m.", evento: "Misa Dominical", icono: "fa-church" },
                { hora: "11:00 a.m.", evento: "Misa Dominical", icono: "fa-church" },
                { hora: "5:00 p.m.", evento: "Misa Dominical", icono: "fa-church" }
            ];
        } else if (diaSemana === 6) { 
            // --- SÁBADOS ---
            agenda[fechaStr] = [
                { hora: "4:00 p.m.", evento: "Misa de Vísperas", icono: "fa-church" },
                { hora: "6:00 p.m.", evento: "Misa de Vísperas", icono: "fa-church" }
            ];
        } else if (diaSemana === 4) { 
            // --- JUEVES (Especial: Sin misa 6pm) ---
            agenda[fechaStr] = [
                { hora: "8:00 a.m.", evento: "Misa matutina", icono: "fa-church" },
                { hora: "9:00 a.m.", evento: "Atención oficina parroquial", icono: "fa-building" },
                { hora: "6:30 p.m.", evento: "Hora Santa", icono: "fa-sun" }
            ];
        } else {
            // --- LUNES, MARTES, MIÉRCOLES Y VIERNES ---
            agenda[fechaStr] = [
                { hora: "8:00 a.m.", evento: "Misa Matutina", icono: "fa-wine-glass" },
                { hora: "9:00 a.m.", evento: "Atención oficina parroquial", icono: "fa-building" }
                
            ];
        }
    }
}

// Inicializamos la agenda para los años deseados
programarCalendarioAnual(2025);
programarCalendarioAnual(2026);

/**
 * Formatea el objeto Date a string YYYY-MM-DD evitando desfases de zona horaria
 */
function formatearFecha(fecha) {
    const tzOffset = fecha.getTimezoneOffset() * 60000;
    return new Date(fecha - tzOffset).toISOString().split("T")[0];
}

/**
 * Renderiza la información en el HTML
 */
function mostrarAgenda() {
    const fechaStr = formatearFecha(diaActual);
    const contenedor = document.getElementById("agenda-contenido");
    const tituloFecha = document.getElementById("fecha-actual");

    // Título de la fecha en formato largo
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

/**
 * Cambia el día actual y refresca la vista
 */
function cambiarDia(cantidad) {
    diaActual.setDate(diaActual.getDate() + cantidad);
    mostrarAgenda();
}

// Iniciar cuando cargue la página
document.addEventListener("DOMContentLoaded", mostrarAgenda);
