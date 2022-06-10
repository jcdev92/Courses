/**********************************/
/* Ejercicios con condicionales: */
/*********************************/

// 1. Usa la sentencia if para ayudar a los clientes de una pizzeria en línea a saber cuanto deben pagar por la pizza que ordenaron.

// las pizzas que tenemos disponibles son:
// 1. Pequeña: $10
// 2. Mediana: $15
// 3. Grande: $20
// 4. Familiar: $25

// En caso de que el cliente solicite una pizza que no esté disponible, debe mostrar un mensaje indicando que no está disponible.
const pizza = 'Familiar'
let precio = 0

console.log(`La pizza ${pizza} cuesta $${precio}`)

// 2. Transforma la siguiente sentencia if en una condicional ternaria.
// puedes usar los operadores lógicos &&, || y los operadores de comparación ===, !=, >, <, >=, <=

const hora = 4
let saludoPorHora

if (hora >= 4 && hora <= 12) {
  saludoPorHora = 'Buenos días'
} else if (hora > 12 && hora <= 18) {
  saludoPorHora = 'Buenas tardes'
} else {
  saludoPorHora = 'Buenas noches'
}

console.log(saludoPorHora)
// Aquí tu código

// 3. Crea una función que reciba como parámetro un string con un nombre del mes y bebe retornar un string que indique la estación del año correspondiente. Si el mes no es válido, debe retornar "Mes no válido".

// 4. Crea una función que retorne verdadero si el número recibido por parámetro es par y falso si es impar.
/*
tips - pares son los números que son divisibles entre 2 sin resto

por ejemplo: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30

2 / 2 = 1, 1 * 2 = 2, 2 - 2 = 0
4 / 2 = 2, 2 * 2 = 4, 4 - 4 = 0
6 / 2 = 3, 3 * 2 = 6, 6 - 6 = 0
8 / 2 = 4, 4 * 2 = 8, 8 - 8 = 0

Usando el operador %
2 % 2 = 0
4 % 2 = 0
6 % 2 = 0
8 % 2 = 0
*/

// 5 Crea una función que realice la siguiente operación: si recibe un número mayor a 10, retorne ese número, si no, retorne el doble del número recibido.

