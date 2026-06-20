const tarea1 = document.querySelector("#tarea_1")
const tarea2 = document.querySelector("#tarea_2")
const tarea3 = document.querySelector("#tarea_3")
const tarea4 = document.querySelector("#tarea_4")
const tarea5 = document.querySelector("#tarea_5")

const ejercicio1 = document.querySelector("#ejercicio_1")
const ejercicio2 = document.querySelector("#ejercicio_2")
const ejercicio3 = document.querySelector("#ejercicio_3")
const ejercicio4 = document.querySelector("#ejercicio_4")
const ejercicio5 = document.querySelector("#ejercicio_5")
const ejercicio6 = document.querySelector("#ejercicio_6")

const buttontareas = document.querySelector("#btntareas")
buttontareas.addEventListener("click", () => {
    const tareas = suma(tarea1.value, tarea2.value, tarea3.value, tarea4.value, tarea5.value)
    const porcentaje = porcentaje(tareas * 0.3 /50)
    resultado.textContent = tareas
    
} )

const buttonejercicios = document.querySelector("#btnejercicios")
buttonejercicios.addEventListener("click", () => {

} )

const buttonexamen = document.querySelector("#btnexamen")
buttonexamen.addEventListener("click", () => {


} )

const buttonfinal = document.querySelector("#btnfinal")
buttonfinal.addEventListener("click", () => {

} )