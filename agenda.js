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

                    } else if (diaSemana === 1) { 
            // --- LUNES  ---
            agenda[fechaStr] = [
                { hora: "8:00 a.m.", evento: "Misa matutina", icono: "fa-church" },
                { hora: "8:00 a.m.", evento: "Atención oficina parroquial", icono: "fa-building" },
                { hora: "9:00 a.m. - 11:30 a.m.", evento: "Atención sacerdotal ", icono: "fa-book-bible" },
                
            ];

                                } else if (diaSemana === 2) { 
            // --- Martes ---
            agenda[fechaStr] = [
                { hora: "8:00 a.m.", evento: "Misa matutina", icono: "fa-church" },
                { hora: "8:00 a.m.", evento: "Atención oficina parroquial", icono: "fa-building" },
                { hora: "2:30 p.m. - 5:00 p.m.", evento: "Atención sacerdotal ", icono: "fa-book-bible" },
               
            ];

            } else if (diaSemana === 3) { 
            // --- Miercoles(Especial:) ---
            agenda[fechaStr] = [
                { hora: "8:00 a.m.", evento: "Misa matutina", icono: "fa-church" },
                { hora: "8:00 a.m.", evento: "Atención oficina parroquial", icono: "fa-building" },
            ];
        } else if (diaSemana === 4) { 
            // --- JUEVES (Especial: Sin misa 6pm) ---
            agenda[fechaStr] = [
                { hora: "8:00 a.m.", evento: "Misa matutina", icono: "fa-church" },
                { hora: "8:00 a.m.", evento: "Atención oficina parroquial", icono: "fa-building" },
                { hora: "9:00 a.m. - 11:30 a.m.", evento: "Atención sacerdotal ", icono: "fa-book-bible" },
                { hora: "2:00 p.m. - 5:00 p.m.", evento: "Atención sacerdotal ", icono: "fa-book-bible" },
                { hora: "6:30 p.m.", evento: "Hora Santa", icono: "fa-sun" }
            ];

                                  } else if (diaSemana === 5) { 
            // --- Martes ---
            agenda[fechaStr] = [
                { hora: "8:00 a.m.", evento: "Misa matutina", icono: "fa-church" },
                { hora: "8:00 a.m.", evento: "Atención oficina parroquial", icono: "fa-building" },
                { hora: "9:00 a.m. - 11:30 a.m.", evento: "Atención sacerdotal ", icono: "fa-book-bible" },
               
            ];
        } 
    }
}

// Inicializamos la agenda para los años deseados
programarCalendarioAnual(2025);
programarCalendarioAnual(2026);


// ===============================
// MISAS ESPECIALES AÑO NUEVO
// ===============================

// --- MIÉRCOLES 31 DE DICIEMBRE 2025 ---
agenda["2025-12-31"] = [
    { hora: "4:30 p.m.", evento: "Misa Año Nuevo - Sabana Redonda (P. Felipe)", icono: "fa-church" },
    { hora: "4:30 p.m.", evento: "Misa Año Nuevo - Santa Cecilia (Fray Gerardo)", icono: "fa-church" },
    { hora: "4:30 p.m.", evento: "Misa Año Nuevo - Santa Rosa (P. Luis)", icono: "fa-church" },
    { hora: "4:30 p.m.", evento: "Misa Año Nuevo - Calle Liles (P. Royner)", icono: "fa-church" },
    { hora: "5:00 p.m.", evento: "Misa Año Nuevo - Cabuyal (P. Rodolfo)", icono: "fa-church" },
    { hora: "6:00 p.m.", evento: "Misa Año Nuevo - Chilamate (P. Luis)", icono: "fa-church" },
    { hora: "6:00 p.m.", evento: "Misa Año Nuevo - San Pedro (P. Royner)", icono: "fa-church" },
    { hora: "6:30 p.m.", evento: "Misa Año Nuevo - San Rafael (P. Felipe)", icono: "fa-church" },
    { hora: "4:30 p.m.", evento: "Misa Año Nuevo - Calle San José (Fray Mario)", icono: "fa-church" }
];

// --- JUEVES 1 DE ENERO 2026 ---
agenda["2026-01-01"] = [
    { hora: "8:00 a.m.", evento: "Misa Año Nuevo - San Pedro (P. Rodolfo)", icono: "fa-church" },
    { hora: "9:30 a.m.", evento: "Misa Año Nuevo - San Juan Sur (P. Felipe)", icono: "fa-church" },
    { hora: "10:00 a.m.", evento: "Misa Año Nuevo - San Pedro (P. Luis)", icono: "fa-church" },
    { hora: "11:00 a.m.", evento: "Misa Año Nuevo - Guatusa (P. Felipe)", icono: "fa-church" }
];
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


