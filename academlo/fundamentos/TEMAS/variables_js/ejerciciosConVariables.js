/******************************/
/* Ejercicios con variables: */
/*****************************/
/*
Ejercicio 1:
1. Declarar dos variables: nombre y usuario sin asignarle ningún valor.
2. Asignar tu nombre a la variable nombre.
3. Copia el valor de nombre a la variable usuario.
4. sin usar la consola responde ¿Qué valor tiene la variable usuario?
*/
let nombre;
let usuario;
nombre = 'Jesus Clemente';
usuario = nombre;


/* la variable usuario tiene como valor el string Jesus Clemente /*

/*
Ejercicio 2:
¿Cómo nombrarías a dicha variable? *en ingles
1. Crea una variable con el nombre de "nuestro planeta".
2. Crea una variable para almacenar el nombre del "usuario actual" de un sitio web.
*/

const our_planet = 'earth';
const user_name = 'claudio'; 

/*
Ejercicio 3:
¿Qué valor tiene la variable userName?
1. Crea la variable userName usando var.
2. Asigna el nombre de una persona a la variable userName.
3. Crea otra variable con el mismo nombre de la variable anterior.
4. Asigna tu nombre a esta variable.
*/

var userName = 'carlos';
var userName = 'Jesus';

/*
Ejercicio 4:

¿Cuál es la diferencia entre var, let y const?
VAR se puede declarar re declarar asignar la variable y reasignar valores,
con LET se puede asignar una o mas veces el valor a la variable 
pero no se puede declarar la variable mas de una vez, con CONST solo se
puede declarar y asignar valor a la variable una sola vez, 
luego no se puede modificar.  

*/

console.log(usuario, our_planet, user_name, userName);