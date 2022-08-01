const navegacion = document.querySelector(".opciones-navegacion");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
    navegacion.classList.toggle("opciones-navegacion-visible")
})