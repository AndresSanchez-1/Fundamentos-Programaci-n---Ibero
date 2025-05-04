// Genera un número aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let adivinado = false;
let intentos = 0;

while (!adivinado) {
    let entrada = prompt("Adivina el número (entre 1 y 100):");
    let numero = parseInt(entrada);

    if (isNaN(numero)) {
        alert("Por favor, introduce un número válido.");
        continue;
    }

    intentos++;

    if (numero < numeroSecreto) {
        alert("Demasiado bajo. Intenta con un número mayor.");
    } else if (numero > numeroSecreto) {
        alert("Demasiado alto. Intenta con un número menor.");
    } else {
        alert(`🎉 ¡Correcto! El número era ${numeroSecreto}. Lo adivinaste en ${intentos} intentos.`);
        adivinado = true;
    }
}
