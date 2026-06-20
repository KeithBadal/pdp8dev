// Imprimir en consola:
// - Si el número de productos es 0, el mensaje: "Alerta, te quedaste sin productos"
//   - Si el número de productos es menor a 5, el mensaje: "Cuidado, te quedan pocos productos"
//   - Si el número de productos es mayor o igual a 5, el mensaje: "Tienes suficientes productos en stock"

const numeroDeProductos = 19
let mensaje = ""

if (numeroDeProductos == 0) {
  mensaje = "Alerta, te quedaste sin productos"
} else if (numeroDeProductos < 5) {
  mensaje = "Cuidado, te quedan pocos productos"
} else {
  mensaje = "Tienes suficientes productos en stock"
}

console.log(mensaje)
