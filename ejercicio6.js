const readline = require('readline')
const operaciones = require('./operaciones')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Ingrese un número: ', (num) => {
  const numero = parseInt(num)
  rl.question('Ingrese otro número: ', (num2) => {
    const numero2 = parseInt(num2)
    console.log(`La suma de ${numero} y ${numero2} es: ${operaciones.suma(numero, numero2)}`)
    rl.close()
  })
})
