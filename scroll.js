document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".fade-in");

    const mostrar = () => {
        elementos.forEach(el => {
            const pos = el.getBoundingClientRect().top;
            const alto = window.innerHeight;

            if (pos < alto - 100) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", mostrar);
    mostrar();
});