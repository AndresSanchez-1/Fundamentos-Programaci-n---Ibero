let numero = prompt("Ingresa un número entre 0 y 10:");

numero = parseInt(numero);

if (!isNaN(numero) && numero >= 0 && numero <= 10) {
  console.log(`Tabla de multiplicar del ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
} else {
  console.log("Número inválido. Debes ingresar un número entre 0 y 10.");
}