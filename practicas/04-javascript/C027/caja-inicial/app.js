const nombreMaceta = "Maceta Grande";
const precioMaceta = 2800;
let cantidadMaceta = 2;

const subtotalMaceta = precioMaceta * cantidadMaceta;

console.log(
  "Subtotal Maceta: " +
    cantidadMaceta +
    " x " +
    precioMaceta +
    " = " +
    subtotalMaceta,
);

const nombreRegadera = "Regadera Mediana";
const precioRegadera = 1500;
let cantidadRegadera = 3;

const subtotalRegadera = precioRegadera * cantidadRegadera;

console.log(
  "Subtotal Regadera: " +
    cantidadRegadera +
    " x " +
    precioRegadera +
    " = " +
    subtotalRegadera,
);

const nombreTierra = "Tierra Fertil";
const precioTierra = 1200;
let cantidadTierra = 5;

const subtotalTierra = precioTierra * cantidadTierra;

console.log(
  "Subtotal Tierra: " +
    cantidadTierra +
    " x " +
    precioTierra +
    " = " +
    subtotalTierra,
);

const totalCompra = subtotalMaceta + subtotalRegadera + subtotalTierra;

console.log("Total de la compra: " + totalCompra);

const dineroRecibido = 35000;
const cambio = dineroRecibido - totalCompra;
console.log("Dinero recibido: " + dineroRecibido);
console.log("Cambio: " + cambio);
