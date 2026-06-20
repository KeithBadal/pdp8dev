// Imprimir en consola si existen más de 20 productos en stock

const numerodeProductos = 20
const mensaje = "¿Hay más de 20 productos en stock? "

let respuesta = ""
if (numerodeProductos > 20) {
  respuesta = "Sí"
} else {
  respuesta = "No"
}

console.log(mensaje + respuesta)
