users = [{ name: 'Erik', email: 'erik@academlo.com' }, { name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' }];
    
email = "erik@academlo.com"

function deleteUser(users, email) {
  // escribe tu solución aquí
  // Recuerda que en esta prueba debes "retornar" el resultado
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      users.splice(i, 1)
    } 
  }
  // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable emails
  // return emails;
  console.log(users)
  return users
}

//deleteUser(users, email)



l1= [
  { name: 'Georg', email: 'georg@academlo.com' },
  { name: 'Andrea', email: 'andrea@gmail.com' }
]

l2= [
  { email: 'georg@academlo.com', attendance: true },
  { email: 'andrea@gmail.com', attendance: false }
]

function mergeData(users, attendances) {
  // escribe tu solución aquí
  // Recuerda que en esta prueba debes "retornar" el resultado
  allData = users.concat(attendances)
  for (i in allData) {
    for (j in allData[i]) {
      if (allData[i][j] == allData[i][j]) {
        console.log(j)
      }
    }
  }
  console.log(allData)
  return allData
  // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable allData
  // return allData;
}

mergeData(l1, l2)
