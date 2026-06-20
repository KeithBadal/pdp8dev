// Como entrada de datos tendremos el nombre del producto, el precio unitario y la cantidad en stock. Imprimir en consola:
// - El mensaje: == SISTEMA BÁSICO DE INVENTARIO ==
// - Producto registrado: [nombre del producto]
// - Precio unitario: $[precio unitario]
// - Unidades disponibles: [cantidad en stock]
// - Valor total del inventario: $[precio unitario * cantidad en stock]


const product_name = "Café"
const product_price = 25.50
const product_stock = 7
let total_inventory = parseFloat(product_price) * parseFloat(product_stock)
total_inventory = total_inventory.toFixed(2)

const message = `== SISTEMA BÁSICO DE INVENTARIO ==\nProducto registrado: ${product_name}\nPrecio unitario: $${product_price}\nUnidades disponibles: ${product_stock}\nValor total del inventario: $${total_inventory}`
console.log(message)
