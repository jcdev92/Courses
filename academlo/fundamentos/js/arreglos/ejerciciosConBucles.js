/***************************/
/* Ejercicios con bucles: */
/**************************/

// 1. Crea un arreglo con los números del 1 al 400
for (let num = 10; num <= 20; num++) {
  console.log(num)
}

// 2. Crea una función que reciba como parámetros 2 números, y retorne un arreglo con todos los valores en el rango de esos 2 números (incluyéndolos), por ejemplo, si recibe 1 y 4 la función debe de retornar el arreglo [1, 2, 3, 4], asumiremos que el segundo parámetro recibido es mayor al primero.
function rango (num, num2) {
  let arreglo = []
  for (let i = num; i <= num2; i++) {
    arreglo.push(i)
  }
  return arreglo
}

console.log(rango(1, 4))
let arregloNumeros = rango(1, 5)

// 3. Crea una función que lea un array de N cantidad de números y retorne la suma de todos esos números.
function sumar (arreglo) {
  let numero = 0
  for (let i = 0; i < arreglo.length; i++) {
    numero += arreglo[i]
  }
  return numero
}

console.log(sumar (arregloNumeros))


// 4. Crea una función que reciba como parámetro un array de N cantidad de elementos y retorne el elemento que se encuentra en la mitad
//    - En caso de que el número de la mitad sea uno solo el programa debe devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
//    - En caso de que hayan 2 números en medio devolveremos un array de números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]

function mitad (numeros) {
  const indiceMitad = Math.floor(numeros.length / 2)

  if (numeros.length % 2 === 0) {
    return [numeros[indiceMitad - 1], numeros[indiceMitad]]
  } else {
    return numeros[indiceMitad]
  }
}

console.log(mitad([1, 5, 4, 8, 5]))
console.log(mitad([1, 3, 4, 5, 5, 3]))


// 5. Realiza el ejercicio anterior de ejercicios para arreglos y objetos 5.1 y 5.2, pero usando funciones con parametros, y bucles.
const usuarios = [
  {
    nombre: 'Erik',
    edad: 29,
    correo: 'erik@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/erik' },
      { nombre: 'twitter', url: 'twitter/erik' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Georg',
    edad: 33,
    correo: 'georg@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/georg' },
      { nombre: 'twitter', url: 'twitter/georg' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Andrea',
    edad: 42,
    correo: 'andrea@hotmail.com',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Mujer'
  },
  {
    nombre: 'Oscar',
    edad: 31,
    correo: 'oscar@academlo.com',
    social: [
      { nombre: 'facebook', url: 'facebook/oscar' },
      { nombre: 'twitter', url: 'twiter/oscar' }
    ],
    genero: 'Hombre'
  },
  {
    nombre: 'Daniela',
    edad: 22,
    correo: 'andrea@uaq.mx',
    social: [
      { nombre: 'facebook', url: 'facebook/andrea' }, // 0
      { nombre: 'twitter', url: 'twitter/andrea' } // 1
    ],
    genero: 'Mujer'
  }
]

// tu función aquí

// 5.1. Almacena todos los correos del arreglo usuarios.
function correos (arreglo) {
  let nuevoArreglo = []
  for (let i = 0; i < arreglo.length; i++) {
    nuevoArreglo.push(arreglo[i].correo)
  }
  return nuevoArreglo
}

console.log(correos(usuarios))
// 5.2. Almacena todas las urls de las cuentas de facebook del arreglo usuarios.
function facebookUrls (arreglo) {
  let nuevoArreglo = []
  for (let i = 0; i < arreglo.length; i++) {
    nuevoArreglo.push(arreglo[i].social[0].url)
  }
  return nuevoArreglo
}

console.log(facebookUrls(usuarios))