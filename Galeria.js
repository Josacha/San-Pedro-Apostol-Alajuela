document.addEventListener("DOMContentLoaded", () => {

  const imagenes = [
    "Imagenes/Carrucel/1.jpg",
    "Imagenes/Carrucel/2.jpg",
    "Imagenes/Carrucel/4.jpg",
    "Imagenes/Carrucel/5.jpg",
    "Imagenes/Carrucel/7.jpg",
    "Imagenes/Carrucel/8.jpg",
    "Imagenes/Carrucel/9.jpg",
    "Imagenes/Carrucel/11.jpg",
    "Imagenes/Carrucel/13.png",
    "Imagenes/Carrucel/14.png",
    "Imagenes/Carrucel/15.png",
    "Imagenes/Carrucel/16.png",
    "Imagenes/Carrucel/17.png"
  ];

  const grid = document.querySelector(".galeria-grid");
  if (!grid) {
    console.warn("⚠ No existe .galeria-grid en esta página");
    return;
  }

  let indice = 0;

  function cambiarGaleria() {
    grid.classList.add("fade");

    setTimeout(() => {
      const imgs = grid.querySelectorAll("img");

      imgs.forEach((img, i) => {
        img.src = imagenes[(indice + i) % imagenes.length];
      });

      indice = (indice + imgs.length) % imagenes.length;
      grid.classList.remove("fade");
    }, 400);
  }

  setInterval(cambiarGaleria, 7000);
});
