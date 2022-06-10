/**************************************/
/* TIPOS DE DATOS ==> ARREGLOS ARRAY */
/*************************************/
// Array (llamada en español arreglo o matriz/vector) para almacenar colecciones de datos ordenadas, donde cada elemento tiene un índice.

// declarar un arreglo
// const arragloVacio = []
// console.log(arragloVacio)

// Agregar elemento en el arreglo
const frutas = ['manzana', 'uva', 'pera', 'mango']
//                  0         1       2       3

// console.log(frutas[0])
// console.log(frutas[2])
// console.log(frutas[3])

// Podemos reemplazar un elemento de un arreglo con su índice
frutas[3] = 'piña'
// console.log(frutas)

// agregar un nuevo elemento
frutas[4] = 'fresa'
// console.log(frutas)

// propiedad length
// console.log(frutas.length)

// truncar el arreglo
frutas.length = 0
// console.log(frutas)

// Podemos almacenar cualquier tipo de dato
const matriz = [{nombre: 'Jesús'}, 'abc', 45, false, function fn() {console.log('Hola')}]

// console.log(matriz[4]())

// Arrays multidimensionales - array anidados
const matrix = [[1,2,3], [4,5,6], [7,8,9]]
//                 0        1        2
//               0 1 2    0 1 2    0 1 2

// console.log(matrix[0][0])
// console.log(matrix[1][1])
// console.log(matrix[2][2])

// comprobar si es o no un arreglo 
console.log(typeof matrix)
console.log(Array.isArray(matrix))

// Más información: https://www.notion.so/academlo/Arreglos-2a2ef0f854564c9baf7f7a7a4b888c20
