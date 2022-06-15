/********************************/
/* BUCLES ==> WHILE (MIENTRAS) */
/*******************************/
// Los Bucles son una forma de repetir el mismo código varias veces.

/*
Sintaxis:
while (condicion) {
  // Bloque de código - cuerpo del bucle
}
*/

// let inicio = 1

// while (inicio <= 10) {
//   console.log(inicio)
//   inicio++
// }

// con arreglos
const frutas = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈']
//               0      1      2     3     4     5      6     7     8      9

// let i = 0 

// while (i < frutas.length) {
//   console.log(frutas[i])
//   i++
// }

// decremento

// let num = 10

// while (num) {
//   console.log(num)
//   num--
// }

// ejemplo

const personas = [
  {
    nombre: 'Jesús',
    edad:34
  }, // 0
  {
    nombre: 'Erik',
    edad:25
  }, // 1
  {
    nombre: 'Andres',
    edad:24
  }, // 2
  {
    nombre: 'Brayan',
    edad:20
  }, // 3
  {
    nombre: 'Miguel',
    edad:32
  }, // 4
]

let i = 0
let nuevoArreglo = []

// while (i < personas.length) {
//   nuevoArreglo[i] = personas[i].nombre
//   i++
// }

// console.log(nuevoArreglo)

/*****************************************/
/* BUCLES ==> DO WHILE (HACER MIENTRAS) */
/****************************************/
// El bucle “do…while” es una variante del bucle “while”.

/*
Sintaxis:
do {
  // cuerpo del bucle
} while (condición)
*/

// let init = 10

// do {
//   console.log(init)
//   init++
// } while (init <= 20)

// while (false) {
//   console.log(init)
//   init++
// }