import Personajes from "./Consultas.js";

document.getElementById("buttonImages").addEventListener("click", async() => {
    const { personajes } = await Personajes.getData();
    console.log(personajes);
    const pj = document.getElementById("nombre").value;
});