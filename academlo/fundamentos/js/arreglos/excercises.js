// users = [{ name: 'Erik', email: 'erik@academlo.com' }, { name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' }];
    
// email = "erik@academlo.com"

// function deleteUser(users, email) {
//   // escribe tu solución aquí
//   // Recuerda que en esta prueba debes "retornar" el resultado
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].email == email) {
//       users.splice(i, 1)
//     } 
//   }
//   // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable emails
//   // return emails;
//   console.log(users)
//   return users
// }

// deleteUser(users, email)


// -------------------------------------------------------------------------------------- //


// l1= [
//   { name: 'Georg', email: 'georg@academlo.com' },
//   { name: 'Andrea', email: 'andrea@gmail.com' }
// ]

// l2= [
//   { email: 'georg@academlo.com', attendance: true },
//   { email: 'andrea@gmail.com', attendance: false }
// ]

// function mergeData(users, attendances) {
//   // escribe tu solución aquí
//   // Recuerda que en esta prueba debes "retornar" el resultado
//   allData = [];
//   for(let i=0;i<attendances.length;i++){
//     allData = allData.concat([Object.assign(users[i], attendances[i])])
//   }
//   console.log(allData);
//   return allData;
// } 
//   // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable allData
//   // return allData;

// mergeData(l1, l2)



// -------------------------------------------------------------------------------------- //


// stud1 = [
//   { name: 'Georg', email: 'georg@academlo.com', score: 100 },
//   { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
//   { name: 'Andrés', email: 'andres@gmail.com', score: 34 }
// ]
// function orderStudentsByScore(students) {
//   // escribe tu solución aquí
//   // Recuerda que en esta prueba debes "retornar" el resultado

//   students.sort(function (a, b) {
//     if (a.score > b.score) {
//       return 1;
//     }
//     if (a.score < b.score) {
//       return -1;
//     }
//     // a must be equal to b
//     return 0;
//   });
//   // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable orderedData
//   // return orderedData;
//   return students
// }

// stud2 = [{"email": "andres@gmail.com", "name": "Andrés", "score": 34}, {"email": "andrea@gmail.com", "name": "Andrea", "score": 15}, {"email": "georg@academlo.com", "name": "Georg", "score": 120}]
// stud3 =  [{"email": "andres@gmail.com", "name": "Andrés", "score": 54}, {"email": "andrea@gmail.com", "name": "Andrea", "score": 12}, {"email": "georg@academlo.com", "name": "Georg", "score": 32}]
// stud4 =   [{"email": "andres@gmail.com", "name": "Andrés", "score": 32}, {"email": "andrea@gmail.com", "name": "Andrea", "score": 54}, {"email": "georg@academlo.com", "name": "Georg", "score": 12}]

// console.log(orderStudentsByScore(stud1));
// console.log(orderStudentsByScore(stud2));
// console.log(orderStudentsByScore(stud3));
// console.log(orderStudentsByScore(stud4));

// -------------------------------------------------------------------------------------- //

// students = [
//   { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
//   { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
//   { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
//   { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
// ]

// countries = [
//   { id: 1, name: 'Mexico', },
//   { id: 2, name: 'Colombia' }
// ]

// countryName = 'Colombia'
// function countStudents(students, countries, countryName) {
//   totalStudents = 0;
//   for (let i = 0; i < countries.length; i++) {
//     if (countries[i].name == countryName) {
//       for (let j = 0; j < students.length; j++) {
//         if (students[j].country_id == countries[i].id) {
//           totalStudents += 1
//         }   
//       }
//     }
//   }
//   // escribe tu solución aquí
//   // Recuerda que en esta prueba debes "retornar" el resultado
//   // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable totalStudents
//   // return totalStudents;
//   console.log("Total students: " + totalStudents)
//   return totalStudents;
// }

// countStudents(students, countries, countryName)

// -------------------------------------------------------------------------------------- //

estudiantes = [
  { name: 'Daniela', age: 25 },
  { name: 'Andrea', age: 23 },
  { name: 'José', age: 27 },
  { name: 'Georg', age: 23 },
];


function findMostCommonAge(students) {
  mostCommonAge = []
  counter = 0
  for (let i = 0; i < students.length; i++) {
    if (students[i].age) {
      counter += 1
      mostCommonAge.push(students[i].age)
    }
  // escribe tu solución aquí
  // Recuerda que en esta prueba debes "retornar" el resultado
  // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable mostCommonAge
  console.log(counter)
  console.log(mostCommonAge)
  return mostCommonAge;
  }
}
findMostCommonAge(estudiantes)