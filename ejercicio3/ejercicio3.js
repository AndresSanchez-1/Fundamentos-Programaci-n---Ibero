let producto = 1;
let contador = 0;

while (contador < 10) {
    let entrada = prompt(`Introduce el número impar #${contador + 1}:`);
    let numero = parseInt(entrada);

    if (isNaN(numero)) {
        alert("Por favor, introduce un número válido.");
        continue;
    }

    if (numero % 2 === 0) {
        alert("Ese número no es impar. Inténtalo de nuevo.");
        continue;
    }

    producto *= numero;
    contador++;
}

alert("El producto de los 10 números impares es: " + producto);