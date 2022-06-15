/***************************************/
/* Ejercicios con arreglos y objetos: */
/**************************************/
// 1. Crear un objeto que contenga un arreglo de 5 nombres de personas.

let people = {
  nombre: ['Juan','Pedro','Maria','Laura','Angel']
}

// 2. Crea un arreglo de 5 objetos, cada objeto debe contener un nombre y una edad.

let users = [
  {
    nombre:'Jose',
    edad : 35
  },
  {
    nombre:'Carlos',
    edad: 50
  },
  {
    nombre:'Maria',
    edad: 25
  },
  {
    nombre:'Andrea',
    edad: 28
  },
  {
    nombre:'Jesús',
    edad: 35
  }
]

// 3. Del arreglo anterior, crea un nuevo arreglo que contenga solo los nombres de las personas.
new_arr = [users[0].nombre, users[1].nombre, users[2].nombre, users[3].nombre, users[4].nombre]
console.log(new_arr)
// 4. Declara una función que reciba un el mismo arreglo de objetos y que retorne la suma de todas las edades.
function sum(users) {
  return users[0].edad + users[1].edad + users[2].edad + users[3].edad + users[4].edad
}
console.log(sum(users));
// 5. Del siguiente arreglo de objetos, realiza lo siguiente:
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
      { nombre: 'facebook', url: 'facebook/andrea' },
      { nombre: 'twitter', url: 'twitter/andrea' }
    ],
    genero: 'Mujer'
  }
]

// 5.1. Crea un array de nombre correos y almacena todos los correos del arreglo usuarios.
const correos = [usuarios[0].correo, usuarios[1].correo, usuarios[2].correo, usuarios[3].correo, usuarios[4].correo]
console.log(correos)

// 5.2. Crea un array de nombre cuentasDeFacebook y almacena todas las urls de las cuentas de facebook del arreglo usuarios.
const cuentasDeFacebook = [usuarios[0].social[0].url, usuarios[1].social[0].url, usuarios[2].social[0].url, usuarios[3].social[0].url, usuarios[4].social[0].url]
console.log(cuentasDeFacebook)
