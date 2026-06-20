const products = document.querySelector("#products")

let pesitos = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
});

document.addEventListener("DOMContentLoaded", e => {
  let productRow = ``
  for (let index = 0; index < productosData.length; index++) {
    productRow += `
        <tr>
          <td>${productosData[index].id}</td>
          <td>${productosData[index].nombre}</td>
          <td>${pesitos.format(productosData[index].precio)}</td>
          <td>${productosData[index].categoria}</td>
          <td>${productosData[index].stock}</td>
        </tr>
    `
  }
  products.innerHTML = productRow
})
