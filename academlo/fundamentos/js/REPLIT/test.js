// evaluation test 1

// first one:

// text = "Ya es la hora"

// function reverseText(text) {
//   // escribe tu solución aquí
//   // Recuerda que en esta prueba debes "retornar" el resultado
//   reversedText = text.split("").reverse().join("");
//   // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable reversedText
//   console.log(reversedText);
//   return reversedText;
// }

// reverseText(text)


// ---------------------------------------------------------------------------------------------- //


// second one:

// array = [30,50,30]
// array2 = [10,25,60,10]

// function sumTwoArrays(array, array2) {
//   // escribe tu solución aquí
//   // Recuerda que en esta prueba debes "retornar" el resultado
//     sum = 0;
//     arrayConcat = array.concat(array2);
//     for (let i = 0; i < arrayConcat.length; i++) {
//         sum += arrayConcat[i];
//     }
//   // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable sum
//   console.log(sum)
//   return sum;
// }

// sumTwoArrays(array, array2)


// ---------------------------------------------------------------------------------------------- //


// third one:

// number = 20;
// totalMultiples = 2;

// function getNMultiples(number, totalMultiples) {
//   // escribe tu solución aquí
//   multiples = [];
//     for (let i = 1; i < totalMultiples+1; i++) {
//         multiples.push(number * (i + 1));
//     }
//   // Recuerda que en esta prueba debes "retornar" el resultado
//   // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable multiples
//   console.log(multiples)
//   return multiples;
// }

// getNMultiples(number, totalMultiples)


// ----------------------------------------------------------------------------------------------- //

// fourth one:

text = "Hola, me gusta la programación"
let mostCommonLetter = ""
function findMostCommonLetter(text) {
  letters = {};
  for (let i = 0; i < text.length; i++) {
    if (text[i] in letters) {
      letters[text[i]] += 1;
    } else {
      letters[text[i]] = 1;
    }
  }

    for (let key in letters) {
        mostCommonLetter += [letters[key]]
    }

    mostCommonLetter = Math.max(...mostCommonLetter)
    for (key in letters) {
        if (letters[key] === mostCommonLetter) {
            mostCommonLetter = key
        }
    }
    console.log(mostCommonLetter)
    return mostCommonLetter
   
}
   


findMostCommonLetter(text)