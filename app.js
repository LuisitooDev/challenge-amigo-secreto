// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

document.getElementById("tituloResultado").style.display = "none"; // Ocultar titulo "Su amigo secreto es"


function vaciarCaja() {
    document.getElementById('amigo').value=''
}

function agregarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let index = 0; index <= amigos.length; index++) {
        let li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = amigos[index]; // Asignar el texto del amigo al <li>
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value.trim();
    //Validamos que el campo este ingresado correctamente
    if (amigo === '') {
        alert('Ingresa un nombre valido')
    } else {
        amigos.push(amigo);
        console.log(amigos);
        agregarLista();
        vaciarCaja();
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (amigos.length == 0) {
        alert('Por favor ingresa al menos un elemento')
    } else {
        let sorteoAmigo = Math.floor(Math.random()*amigos.length);
        let amigoElegido = amigos[sorteoAmigo];

        document.getElementById("tituloResultado").style.display = "block"; // Mostrar titulo "Su amigo secreto es"
        resultado.innerHTML = amigoElegido;
    }
}


