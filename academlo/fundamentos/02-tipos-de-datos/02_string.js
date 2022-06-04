/*********************************/
/* TIPOS DE DATOS ==> #2 STRING */
/********************************/
// El tipo string representa cadenas de caracteres y debe ser entre comillas.

/*
Podemos usar comillas:
  - simples: 'Hola',
  - dobles: "como estas",
también podemos usar comillas invertidas: `bienvenido` alt + 96
*/

const comillasSimples = 'Hola "a todos"'
const comillasDobes = "Como estan 'todos'"

const comillasInvertidas = `Aprendiendo ' " JavaScript`

// console.log(comillasInvertidas)

// console.log(comillasSimples)
// console.log(comillasDobes)
// console.log(comillasInvertidas)

// Escape 
// console.log('hola como \n \'estas\'')

const nombre = 'Mario'
const apellido = 'Perez'
const edad = 20

// const nombreCompleto = nombre + ' ' + apellido
// console.log(nombreCompleto)

// console.log('mi nombre es' + ' ' + nombre + ' ' + apellido + ' ' + 'y tengo la edad de' + ' ' + edad + ' ' + 'años')

// console.log('frutas: \n- fresa \n-uva \n-pera')

// console.log(`mi nombre es ${nombre} ${apellido} 
// y tengo la edad 
// de ${edad} 
// años`)

// console.log(`Bienvenido ${nombre}`)

// propiedad length - longitud
const str = 'Hola cómo estan'
// console.log(str.length) // total de índices + 1
// H  o  l  a     c  o  m  o      e   s   t   a   n
// 0  1  2  3  4  5  6  7  8  9  10  11  12  13  14 <-- índices

// console.log(str[0])
// console.log(str[1])
// console.log(str[2])
// console.log(str[3])
// console.log(str[14])
// console.log(str.length - 1)
// console.log(str[str.length - 1])

// ejemplo con arreglo
const frutas = ['uva', 'pera', 'manzana']              
//                0       1        2
frutas[1] = 'plantano'
console.log(frutas[1]) // pera

// strings son inmutables
str[0] = 'M'
console.log(str[0])

// Más Info: https://www.notion.so/academlo/Tipos-de-Datos-primitivos-ed3f754ef79f4ec1bad36290ce46442e
