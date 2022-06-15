/**************************************/
/* TIPOS DE DATOS ==> OBJETOS OBJECT */
/*************************************/
// Los objetos son usados para almacenar colecciones de varios datos y entidades más complejas asociados con un nombre clave.
// { clave: 'valor' } Este par de conceptos vamos a llamarlos como “clave: valor”.

// Objeto literal
const persona = {
  nombre: 'Jesús',
  edad: 34,
  'is Active': 'si esta activo'
}

// Acceder a las propiedades de un objeto
// Notación de punto
// console.log(persona.isActive)

// agregar propiedades a un objeto
persona.email = 'jesus@email.com'

// console.log(persona)

// eliminar propiedades
// delete persona.isActive
// console.log(persona)

// Notación de corchetes
// console.log(persona['is Active'])
// console.log(persona['nombre'])
// console.log(persona['edad'])

// acceder a una propiedad
// console.log(persona['nombre'])

// agregar una nueva propiedad
persona['color favorito'] = 'blanco'
persona['nombre'] = 'Brayan'

// operador in
// console.log('nada' in persona)

const users = [
  {
    nombre: 'Gilberto'
  }, // 0
  {
    nombre: 'daniel'
  }, // 1
  {
    nombre: 'sebastian'
  }, // 2
  {
    nombre: 'kevin'
  } // 3
]

// console.log(users[0].nombre)
// console.log(users[1].nombre)
// console.log(users[2].nombre)
// console.log(users[3].nombre)

// Más información: https://www.notion.so/academlo/Objetos-a64c564dd8bd4ed38a5a186bb7c39fa4
