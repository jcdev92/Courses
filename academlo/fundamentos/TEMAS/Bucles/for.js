function getEmails(users) {
    // escribe tu solución aquí
    // Recuerda que en esta prueba debes "retornar" el resultado
    let emails = [];
    for (let i = 0; i <= users.length-1; i++) {
      emails.push(users[i].email)
    }

    return emails
    // por ejemplo en el siguiente ejemplo tendrías el resultado en la variable emails
    // return emails;
  }
  
  users = [
    {
      name: 'jhon',
      email: 'jhon@gmail.com',
      age: 25
    },
    {
      name: 'miguel',
      email: 'miguel@gmail.com',
      age: 30
    },
    {
      name: 'ana',
      email: 'ana@gmail.com',
      age: 32
    },
    {
      name: 'diego',
      email: 'diego@gmail.com',
      age: 28
    }
  ]
  console.log(getEmails(users))