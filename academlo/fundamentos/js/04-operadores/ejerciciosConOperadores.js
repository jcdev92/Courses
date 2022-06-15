/*******************************/
/* Ejercicios con operadores: */
/******************************/
// ¿Cual es el resultado de las siguiten expresiones?

console.log(1 + 2 + '3') // 33
console.log(1 + 2 + '3' + 4) // 334
console.log(10 + 4 - 2 * 5) // 4
console.log(11 % 4) // 3
console.log(10 ** 2) // 100

// ¿Cuáles son los valores finales de todas las variables a, b, c y d después del código a continuación?

let a = 1
let b = 1

const c = ++a
const d = b++

console.log(a) // 2
console.log(b) // 2
console.log(c) // 2
console.log(d) // 1

// ¿Cuáles son los valores de ‘e’ y ‘f’ después del código a continuación?

let e = 2
const f = 1 + (e *= 2)
console.log(e) //
console.log(f) //

// ¿Cuál es el valor de ‘g’ después del código a continuación?
let g = 3
g += 5
console.log(g) // 8

// ¿Cuál es el valor de cada comparación después del código a continuación?

console.log(5 > 4) // true
console.log('banco' < 'barco') // true
console.log(80 >= 15) // true
console.log(500 <= 100) // false
console.log(undefined == null) // true
console.log('2' > '12') // true
console.log(0 === 1) // false
console.log(1 !== 0) // true
console.log(undefined === null) // false
console.log(null == '\n0\n') // false
console.log(+'\n0\n' === null) // false

// ¿Cuál es el resultado de cada valor después del código a continuación?

console.log(null || 2 || undefined) // 2
console.log(1 || 2 || 3) // 1
console.log(1 && null && 2) // null
console.log(1 && 2) // 2
console.log(null || 2 && 3 || 4) // 3

const count = 0

console.log(null || count || 35) // 35
console.log(null && count && 35) // null
console.log(null ?? count ?? 35) // 0
