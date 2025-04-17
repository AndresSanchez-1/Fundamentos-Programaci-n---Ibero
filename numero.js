let N = parseInt(prompt("¿Cuántos sueldos deseas ingresar?"));
let sueldoMax = 0;

for (let i = 1; i <= N; i++) {
  let sueldo = parseFloat(prompt(`Ingresa el sueldo #${i}:`));
  if (sueldo > sueldoMax) {
    sueldoMax = sueldo;
  }
}

console.log(`El sueldo máximo es: $${sueldoMax.toFixed(2)}`);
for (let i = 0; i <= 99999; i++) {
    let numero = i.toString().padStart(5, '0');
    let transformado = numero.replace(/3/g, 'E');
    let conGuiones = transformado.split('').join('-');
    console.log(conGuiones);
  }
  