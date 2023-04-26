console.log("Tarea Bootstrap");

function changeGreeting(){
    // obtener nombre cliente
    const clientName = getNameOfClient();

    // obtener referencia del label h1
    const greetingReference = getReferenceOfIdGreeting();

    greetingReference.innerHTML = "Hola " + clientName;
    // cambiar el saludo
}

function getNameOfClient() {
    const clientName = prompt("Escribe tu nombre");
    return clientName;
}

function getReferenceOfIdGreeting(){
    return document.getElementById("greeting");
}