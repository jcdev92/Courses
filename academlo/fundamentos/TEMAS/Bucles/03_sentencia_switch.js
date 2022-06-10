/***************************************/
/* CONDICIONALES ==> SENTENCIA SWITCH */
/**************************************/
// La sentencia switch es una forma de evaluar una condición y ejecutar una secuencia de instrucciones dependiendo de la condición.

// Sintaxis
/*
switch (valor) {
  case valor1:
    bloque de código
    break
  case valor2:
    bloque de código
    break
  default:
    bloque de código
  }
*/

// let diaDeLaSemana = 7

// switch (diaDeLaSemana) {
//   case 1:
//     console.log('Lunes')
//     break // Si no existe break entonces la ejecución continúa con el próximo case sin ninguna revisión
//   case 2:
//     console.log('Martes')
//     break
//   case 3:
//     console.log('Miércoles')
//     break
//   case 4:
//     console.log('Jueves')
//     break
//   case 5:
//     console.log('Viernes')
//     break
//   case 6:
//     console.log('Sabado')
//     break
//   case 7:
//     console.log('Domingo')
//     break
//     default:
//     console.log('No es un dia de la semana valido')
// }

// tips
const dias = {
  1: 'Lunes',
  2: 'Martes',
  3: 'Miercoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sabado',
  7: 'Domingo'
}

// tips
// let keys = Object.keys(dias)
// let values = Object.values(dias)

// console.log(keys)
// console.log(values)
let diaDeLaSemana = 3
console.log(dias[diaDeLaSemana])

// . & []
if(dias[diaDeLaSemana]) {
  console.log(dias[diaDeLaSemana])
}

// // Agrupamiento de case
// La habilidad para “agrupar” cases es un efecto secundario de como trabaja switch sin break.

const mesActual = 'abril'
let estacion

switch (10 ) {
  case 'enero':
  case 'febrero':
  case 'marzo':
    estacion = 'Invierno'
    break
  case 'abril':
  case 'mayo':
  case 'junio':
    estacion = 'Primavera'
    break
  case 'julio':
  case 'agosto':
  case 'septiembre':
    estacion = 'Verano'
    break
  case 'octubre':
  case 'noviembre':
  case 'diciembre':
    estacion = 'Otoño'
    break
  default:
    estacion = 'No es un mes'
}

// console.log(estacion)


// Más información:
