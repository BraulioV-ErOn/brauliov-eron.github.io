const fechaElemento = document.getElementById("fecha");
const farmaciaElemento = document.getElementById("farmacia");
const btnMaps = document.getElementById("btn-maps");
const btnWpp = document.getElementById("btn-wpp");

function actualizarFecha() {
  const ahora = new Date();
  const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  fechaElemento.textContent = ahora.toLocaleDateString('es-AR', opciones);
}

actualizarFecha();

// Datos de prueba (después lo volvemos a conectar con Sheets)
farmaciaElemento.textContent = "Red Farmako Farmavida";

btnMaps.addEventListener("click", () => {
  window.open("https://maps.google.com", "_blank");
});

btnWpp.addEventListener("click", () => {
  window.open("https://wa.me/549XXXXXXXXXX", "_blank");
});
