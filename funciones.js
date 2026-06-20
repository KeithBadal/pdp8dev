const num1 = document.querySelector("#numero_1")
const num2 = document.querySelector("#numero_2")
const buttonSuma = document.querySelector
  ("#btnSuma")
const resultado = document.querySelector("#resultado")

buttonSuma.addEventListener("click", () => {
  const res = suma(num1.value, num2.value)
  resultado.textContent = res
  limpiar(num1, num2)
})

// Tarea1: Agrega eventos para los otros botones de resta, multiplicación y división
// Tarea2: Crear un archivo que se llame metodos.html, contendrá únicamente un input de tipo númerom un botón que calcule: números pares, números impares, números primos y que el resultado se muestre en un párrafo debajo del botón. Ejemplo:
// Fecha de entrega: Jueves 11 de Junio hasta las 11:59 PM
// 1 -> clic al botón -> El número 1 es impar y primo
// 2 -> clic al botón -> El número 2 es par y primo
// 3 -> clic al botón -> El número 3 es impar y primo
// 4 -> clic al botón -> El número 4 es par y no es primo
// 5 -> clic al botón -> El número 5 es impar y primo
