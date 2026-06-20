// Imprimir en consola, el mensaje para 3 productos distintos:
// - El mensaje: == SISTEMA BÁSICO DE INVENTARIO ==
// - Producto 1 registrado: [nombre del producto]
// - Precio unitario del producto 1: $[precio unitario]
// - Unidades disponibles del producto 1: [cantidad en stock]
// - Producto 1 registrado: [nombre del producto]
// - Precio unitario del producto 1: $[precio unitario]
// - Unidades disponibles del producto 1: [cantidad en stock]
// - Producto 2 registrado: [nombre del producto]
// - Precio unitario del producto 2: $[precio unitario]
// - Unidades disponibles del producto 2: [cantidad en stock]
// - Producto 3 registrado: [nombre del producto]
// - Precio unitario del producto 3: $[precio unitario]
// - Unidades disponibles del producto 3: [cantidad en stock]
// - Valor total del inventario: $[precio unitario * cantidad en stock]

const products = [
  {
    name: "café",
    price: 25.50,
    stock: 7
  },
  {
    name: "computadora",
    price: 250.50,
    stock: 7
  },
  {
    name: "pizzarón",
    price: 125.50,
    stock: 7
  },
  {
    name: "Shampoo",
    price: 30,
    stock: 17
  }
]
let total_inventory = 0
let message = `== SISTEMA BÁSICO DE INVENTARIO ==`
products.forEach((product, index) => {
  total_inventory = total_inventory + parseFloat(product.price) * parseFloat(product.stock)
  message = message + `\nProducto ${index + 1} registrado: ${product.name}\nPrecio unitario del producto ${index + 1}: $${product.price}\nUnidades disponibles del producto ${index + 1}: ${product.stock}\n`
})
console.log(message + `Valor total del inventario: $${total_inventory.toFixed(2)}`)
