let sumaPositivos = 0;
let sumaNegativos = 0;
let cuentaPositivos = 0;
let cuentaNegativos = 0;
let ceros = 0;

for (let i = 1; i <= 10; i++) {
    let entrada = prompt(`Introduce el número #${i}:`);
    let numero = parseFloat(entrada);

    if (isNaN(numero)) {
        alert("Por favor, introduce un número válido.");
        i--; // repetir esta iteración
        continue;
    }

    if (numero > 0) {
        sumaPositivos += numero;
        cuentaPositivos++;
    } else if (numero < 0) {
        sumaNegativos += numero;
        cuentaNegativos++;
    } else {
        ceros++;
    }
}

let mediaPositivos = cuentaPositivos > 0 ? (sumaPositivos / cuentaPositivos).toFixed(2) : "N/A";
let mediaNegativos = cuentaNegativos > 0 ? (sumaNegativos / cuentaNegativos).toFixed(2) : "N/A";

alert(`Resultados:
- Media de positivos: ${mediaPositivos}
- Media de negativos: ${mediaNegativos}
- Cantidad de ceros: ${ceros}`);
