/****************************/
/* Ejercicios con strings: */
/***************************/
// Pudes usar los métodos de strings vistos en clase

// Ejemplo: Declara una funcion que retorne el número de caracteres que tiene una cadena de texto (longitud).

// Declara tu función aquí
function contarCaracteres (cadena) { // <- no te olvides de pasar los parámetros
  return cadena.length
}

const resutado = contarCaracteres('lasquinceletras') // <- recuerda llamar o invocar a tu función y pasarle los argumentos

// console.log(resutado) // 15

// Declara una función que reciba como parámetro una frase y una palabra y que retorne true si la frase contiene la palabra, false si no.
const frase = 'Hola, mi nombre es Juan y tengo 23 años'
const palabra = 'Juan'

function siContiene (frase, palabra) {
  return frase.includes(palabra)
}

// console.log(siContiene(frase, palabra))
// console.log(siContiene(frase, 'Pedro'))

// Declara una función que regrese la longitud de la última palabra de una frase.
const frase2 = 'Aprendiendo Fundamentos de JavaScript'
// ['Aprendiendo', 'Fundamentos', 'de', 'JavaScript']
//         0             1          2         3

function longitudUltimaPalabra (frase) {
  let separar = frase.split(' ')
  return separar[separar.length - 1].length
}

// console.log(longitudUltimaPalabra(frase2))

// Declara una función que reciba como parámetro una frase y una palabra, deberá reemplazar la última palabra de la frase por la otra palabra.
const frase3 = 'El perro come pescado'
const remplazo = 'croquetas'

function reemplazarPalabra (frase, palabra) {
  let separar = frase.split(' ')
  console.log('1:', separar)
  let ultimaPalabra = separar[separar.length - 1]
  console.log('2:', ultimaPalabra)
  console.log('3:', 'Utilizando replace')
  return frase.replace(ultimaPalabra, palabra)
}

// console.log(reemplazarPalabra (frase3, remplazo))

// Declara una función que reciba como parámetro 3 cadenas de texto, deberas extraer las edades de cada una de ellas y retornar la suma de ellas.
// La edad siempre será la penúltima palabra de la cadena.
function sumarEdades (str, str2, str3) {
  const cad1 = str.split(' ').at(-2)
  const cad2 = str2.split(' ').at(-2)
  const cad3 = str3.split(' ').at(-2)

  return Number(cad1) + Number(cad2) + Number(cad3)
}

const cadena = 'Hola, mi nombre es Erik y tengo 30 años'
const cadena3 = 'Hola, mi nombre es Andres y tengo 40 años'
const cadena2 = 'Hola, mi nombre es Brayan y tengo 25 años' 

// console.log(sumarEdades(cadena, cadena3, cadena2))

// Declara una función que reiba como parámetro una cadena de texto y un número, deberá retornar la cadena repetida n veces siendo n el número recibido.

function repetirPalabra (cadeDeTexto, numero) {
  return cadeDeTexto.repeat(numero)
}

const cadena4 = 'Hola '
const numero = 3

// console.log(repetirPalabra(cadena4, numero))

// Declara una función que reciba como parámetro una cadena de texto que deberá retornar la cadena en un arreglo y en minisulas.

function arregloMinusculas (cadena) {
  return cadena.toLowerCase().split(' ')
}

const cadena5 = 'HoLa cOMo eStas'
console.log(arregloMinusculas(cadena5))