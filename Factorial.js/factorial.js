function calcularFactorial() {
    const input = prompt("Ingresa un número:");
    const numero = parseInt(input);
  
    if (isNaN(numero) || numero < 0) {
      alert("Por favor, ingresa un número entero positivo o cero.");
      return;
    }
  
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
  
    alert(`El factorial de ${numero} es: ${factorial}`);
  }