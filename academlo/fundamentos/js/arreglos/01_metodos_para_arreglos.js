/**********************************/
/* MÉTODOS ==> ARREGLOS (ARRAYS) */
/*********************************/
const frutas = ['Manzana', 'Pera', 'Naranja', 'Sandía', 'Melón', 'Pera']
//                 0          1        2         3         4       5

// .indexOf(searchElement, index) – busca el elemento comenzando desde el index, y devuelve el index donde fue encontrado, de otro modo devuelve -1.
// console.log(frutas.indexOf('Melón')) // 4
// console.log(frutas.indexOf('Pera', 2)) // 1

// // .lastIndexOf(item, from) – igual que el anterior, pero busca de derecha a izquierda.
// console.log(frutas.lastIndexOf('Melón')) // 4
// console.log(frutas.lastIndexOf('Pera', 4)) // 1

// // .includes(searchElement, index) – busca comenzando desde el índice, devuelve true en caso de ser encontrado.
// console.log(frutas.includes('Pera'))
// console.log(frutas.includes('Manzana'))
// console.log(frutas.includes('Uva'))
// console.log(frutas.includes('Pera', 2))

// // .toString() - convierte un arreglo en una cadena de texto string (separado por comas).
// console.log(frutas.toString())

// // .join(glue) - se comporta igual que toString, pero además puede especificar el separador
// console.log(frutas.join(' '))

// .pop() - Extrae el último elemento del array y lo devuelve:
let valorRetornado = frutas.pop()
console.log(valorRetornado)

console.log(frutas)

// .push() - Agrega el elemento al final del array:
frutas.push('Platano', 'Melon')
console.log(frutas)

// .shift() - Extrae el primer elemento del array y lo devuelve:
const retornoDeFrutas = frutas.shift()
console.log(retornoDeFrutas)

console.log(frutas)

// .unshift() - Agrega el elemento al principio del array:
frutas.unshift(retornoDeFrutas)
console.log(frutas)

// .concat(...elementos) - devuelve un nuevo arreglo con todos los elementos actuales y agrega otros arreglos
let g1 = ['Luis', 'Pedro', 'Erik']
let g2 = ['Joel', 'Fabian', 'Ricardo']
let g3 = ['Jose', 'Pablo']

const nuevoGrupo = g1.concat(g2, 'Alexis', g3)
console.log(nuevoGrupo)

// .splice(desde, cuantos) - desde (la posición) borra (cuántos elementos) e inserta nuevos elementos.
nuevoGrupo.splice(0, 2)
console.log(nuevoGrupo)

nuevoGrupo.splice(2, 0, 'Luis', 'Pedro')
console.log(nuevoGrupo)

nuevoGrupo.splice(-3, 2)
console.log(nuevoGrupo)

// .slice() - crea un nuevo array y copia elementos desde la posición desde / hasta en el nuevo array, no incluye el final.
// console.log(frutas)
// let copy = frutas.slice()
// console.log(copy.slice(1, 4))
// console.log(copy.slice(-2))

// .reverse() - ordena el array de forma inversa y lo devuelve.
// console.log(frutas.reverse())

// .sort() - ordena el array y lo devuelve
console.log(nuevoGrupo.sort())

let numeros = [{edad: 20}, {edad: 10}, {edad: 5}, {edad: 50}]

numeros.sort(function (a, b) { // funcion anonima
  return a.edad - b.edad
})











