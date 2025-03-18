// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = nombre;

        // Botón para eliminar
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";
        botonEliminar.classList.add("eliminar");
        botonEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para realizar el sorteo.");
        return;
    }
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    let amigosSorteo = [...amigos]; // Copia de la lista para no modificar el original
    let emparejamientos = [];
    
    while (amigosSorteo.length > 1) {
        let indice1 = Math.floor(Math.random() * amigosSorteo.length);
        let amigo1 = amigosSorteo.splice(indice1, 1)[0];
        
        let indice2 = Math.floor(Math.random() * amigosSorteo.length);
        let amigo2 = amigosSorteo.splice(indice2, 1)[0];
        
        emparejamientos.push(`${amigo1} -> ${amigo2}`);
    }
    
    resultado.innerHTML = emparejamientos.map(pair => `<li>${pair}</li>`).join("");
}

function eliminarTodos() {
    amigos = [];
    actualizarLista();
    document.getElementById("resultado").innerHTML = "";
}