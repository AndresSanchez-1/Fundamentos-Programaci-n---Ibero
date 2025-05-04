let totalFacturacion = 0;
let litrosArticulo1 = 0;
let facturasMayores600 = 0;

for (let i = 1; i <= 5; i++) {
  let codigo = prompt(`Factura ${i} - Ingresa el código del artículo:`);
  let litros = parseFloat(prompt(`Factura ${i} - Ingresa la cantidad vendida en litros:`));
  let precioLitro = parseFloat(prompt(`Factura ${i} - Ingresa el precio por litro:`));

  let totalFactura = litros * precioLitro;
  totalFacturacion += totalFactura;

  if (codigo === "1") {
    litrosArticulo1 += litros;
  }

  if (totalFactura > 600) {
    facturasMayores600++;
  }
}

console.log(`Facturación total: $${totalFacturacion.toFixed(2)}`);
console.log(`Cantidad total de litros vendidos del artículo 1: ${litrosArticulo1} litros`);
console.log(`Cantidad de facturas mayores a $600: ${facturasMayores600}`);