/*******************/
/* BUCLES ==> FOR */
/******************/
// El bucle for es más complejo, pero también el más usado.

/*
Sintaxis:
for (inicialización; condición; operación) {
  // cuerpo del bucle
}
*/

/*
Vamos a examinar la declaración for parte por parte:
1. (inicialización) se ejecuta una vez al principio del bucle.
2. (condición) se comprueba antes de cada iteración. Si es falsa, el bucle finaliza.
3. (código) se ejecuta una y otra vez mientras la condición sea verdadera.
4. (operación) se ejecuta después del cuerpo al final de cada iteración del bucle.
*/

// for (let i = 1; i <= 10; i++) {
//   console.log(i) // cuerpo del bucle
// }

// El algoritmo general del bucle funciona de esta forma:
/*
inicialización
--> si condición se cumple --> ejecuta el cuerpo del bucle --> ejecuta operación
--> si condición se cumple --> ejecuta el cuerpo del bucle --> ejecuta operación
--> si condición se cumple --> ejecuta el cuerpo del bucle --> ejecuta operación
--> si condición ya no se cumple --> termina el bucle
*/

// Rompe el bucle con break
// Cuando la condición se vuelve falsa se sale de un bucle, Pero podemos forzar una salida en cualquier momento usando la directiva especial break.

// for (let i = 1; i <= 20; i++) {
//   console.log(i)
//   if (i === 5) {
//     break
//   }
// }

// Continua con la siguiente iteración con continue
// La directiva continue es una “versión más ligera” de break. No detiene el bucle completo. En su lugar, detiene la iteración actual y fuerza al bucle a comenzar una nueva (si la condición lo permite).

// for (let i = 1; i <= 20; i++) {
//   if (i % 2) {
//     continue
//   }
//   console.log(i)
// }

// for anidados
// un for dentro de otro for
for (let i = 1; i <= 3; i++) {
  console.log('iteracion: i:', i)
  for (let j = 1; j <= 3; j++) {
    console.log('interacion j::', j)
  }
}

/*
// comenzar
// i: 1 --> primera iteracion de i
// i: 1 j: 1 --> primera iteracion de i --> primera iteracion de j
// i: 1 j: 2 --> primera iteracion de i --> segunda iteracion de j
// i: 1 j: 3 --> primera iteracion de i --> tercera iteracion de j

// i: 2 --> segunda iteracion de i
// i: 2 j: 1 --> segunda iteracion de i --> primera iteracion de j
// i: 2 j: 2 --> segunda iteracion de i --> segunda iteracion de j
// i: 2 j: 3 --> segunda iteracion de i --> tercera iteracion de j

// i: 3 --> tercera iteracion de i
// i: 3 j: 1 --> tercera iteracion de i --> primera iteracion de j
// i: 3 j: 2 --> tercera iteracion de i --> segunda iteracion de j
// i: 3 j: 3 --> tercera iteracion de i --> tercera iteracion de j
// fin
*/