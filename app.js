
let amigos = {};

function agregarAmigo(){  
    const inputAmigo = document.getElementById("amigo")
    const nombreAmigo = inputAmigo.value.trim();
    
    if (nombreamigo === "") {
        alert("Por favor, agrega un nombre");
        return;
    }

    amigos.push(nombreamigo);

    actualizarlista();

    inputAmigo.value = "";
    inputAmigo.focus;
}
  


function actualizarlista (){
    const listaAmigoUl = document.getElementById("listaAmigos")
    listaAmigoUl.innerHTML = "";

    amigos.forEach(amigo => {
        const li =document.createElement (li);
        li.textcontent = amigo;
        listaAmigoUl.appendChild(li);
        
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No ha agregado amigos para sortear. Inserte un nombre para poder sortear.");
        return
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;
    
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo)
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});