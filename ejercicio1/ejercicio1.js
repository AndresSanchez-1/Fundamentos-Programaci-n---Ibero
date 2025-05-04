
    let numero;

    do {
        numero = parseFloat(prompt("Introduce un número (introduce un numero negativo para salir):"));
        
        if (numero >= 0) {
            alert("El cuadrado de " + numero + " es " + (numero * numero));
        }

    } while (numero >= 0);


