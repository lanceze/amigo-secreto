const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

console.log(document.getElementById("amigo").value);

function agregarAmigo() {
    if (document.getElementById("amigo").value == "") {
        alert("Por favor, escriba un nombre")
    } else {
        listaAmigos.push(inputAmigo.value);
        ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
        document.getElementById("amigo").value = null;
    }
}

function sortearAmigo(){
    if (listaAmigos.length > 0) {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`
    }  else {
        alert("Debe ingresar amigos a la lista antes de sortear");
    };
}
