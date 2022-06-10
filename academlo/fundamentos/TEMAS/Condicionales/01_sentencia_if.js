/***********************************/
/* CONDICIONALES ==> SENTENCIA IF */
/**********************************/
// Algunas veces, necesitamos ejecutar diferentes acciones basadas en diferentes condiciones. La sentencia if evalúa la condición en los paréntesis, y si el resultado es true ejecuta un bloque de código.

// declarar una operacion 
let condicional = 10 > 5

// 


// ejemplo de varios if
let numero1 = 10
let numero2 = 10

// if (numero1 > numero2) {
//   console.log('condicion 1')
// }

// if (numero1 < numero2) {
//   console.log('condicion 2')
// }

// if (numero1 === numero2) {
//   console.log('condicion 3')
// }

/*********/
/* else */
/********/
// La cláusula else es un bloque opcional y este se ejecutará cuando la condición sea falsa.

// if (false) {
//   console.log('Mostrando el bloque if')
// } else {
//   console.log('Mostrando el bloque else')
// }

// const edad = 15
// let permiso

// if (edad >= 18) {
//   permiso = 'Si tienes edad para conducir'
// } else {
//   permiso = 'No tienes edad para conducir'
// }

// console.log(permiso)

/************/
/* else if */
/***********/
// La cláusula else if nos proporciona bloques opcionales para probar todas nuestras variantes.
// if (numero1 > numero2) {
//   console.log('condicion 1')
// } else if (numero1 < numero2) {
//   console.log('condicion 2')
// } else if (numero1 === numero2) {
//   console.log('condicion 3')
// } else {
//   console.log('No es un Número valido')
// }

let diaDeLaSemana = 8

if (diaDeLaSemana == 1) {
  console.log('Lunes')
} else if (diaDeLaSemana == 2) {
  console.log('Martes')
} else if (diaDeLaSemana == 3) {
  console.log('Miércoles')
} else if (diaDeLaSemana == 4) {
  console.log('Jueves')
} else if (diaDeLaSemana == 5) {
  console.log('Viernes')
} else if (diaDeLaSemana == 6) {
  console.log('Sabado')
} else if (diaDeLaSemana == 7) {
  console.log('Domingo')
} else {
  console.log('No es un dia de la semana valido')
}

console.log('Siempre se muestra')

// Más información:
