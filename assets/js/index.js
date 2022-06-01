import { Saiyajin, Humano } from "./clases/Razas.js";

let participantes = []

document.getElementById("btnRegistrar").addEventListener("click", () => {
    let nombre = document.getElementById("nombre");
    let raza = document.getElementById("raza");
    let previewElement = document.getElementById("preview");
    let ImagenSrcBg = previewElement.style.backgroundImage;
    let imgSrc = ImagenSrcBg.slice(5, ImagenSrcBg.length - 2);
    let ki = document.getElementById("poderPelea");

    let nuevoParticipante;

    if (raza.value == "Saiyajin") {
        nuevoParticipante = new Saiyajin(
            nombre.value,
            imgSrc.value,
            ki.value,
            raza.value
        );
    } else if (raza.value == "Humano") {
        nuevoParticipante = new Humano(
            nombre.value,
            imgSrc.value,
            ki.value,
            raza.value
        );
    }

    participantes.push(nuevoParticipante);
    console.log(participantes);
});