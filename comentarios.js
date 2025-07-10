const form = document.getElementById("formComentario");
const lista = document.getElementById("listaOpiniones");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const comentario = document.getElementById("comentario").value.trim();

  if (nombre && comentario) {
    // Guardar en localStorage
    const opiniones = JSON.parse(localStorage.getItem("opiniones")) || [];
    opiniones.push({ nombre, comentario });
    localStorage.setItem("opiniones", JSON.stringify(opiniones));


    form.reset();
  }
});
