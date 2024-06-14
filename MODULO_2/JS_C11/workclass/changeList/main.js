// document.write("Hello")
const listaParticipante = document.getElementById("list-1")

const addToList = () => {
    const name = "Daniel";
    listaParticipante.innerHTML = listaParticipante.innerHTML + "<li>" + name + "</li>";
}
