/***********************/
/* COERCIÓN DE TIPOS */
/*********************/
// En JavaScript, la coerción es una característica que fuerza a una variable de cierto tipo a tener el comportamiento de una diferente.

/************************************/
/* COERCIÓN DE TIPOS ==> Inplícita */
/***********************************/
// console.log('hola ' + 'como estas')
// console.log('1' + 2)
// console.log(1 + '2')
// console.log('esto es un boleano ' + true)

// coerción implicita con strings
// console.log('24' / '2')
// console.log('15' - '5')
// console.log('2' * '2')

// NaN 
// console.log('abc' * 2)

// null y undefined
// null = 0 
// truty todo lo demas siempre nos daran = true 
// falsy: null, '', false, 0, undefined = false
// console.log(1 / null)

// undefined = NaN
// console.log((2 + 4) * 2 / undefined)

// boolean
// true = 1
// false = 0
// console.log(true + 2)
// console.log(true * 5)
// console.log(true / false)

/************************************/
/* COERCIÓN DE TIPOS ==> Explícita */
/***********************************/
// console.log(String(1) + String(2))

// strings => número
// console.log(Number('24') + Number('2'))
// console.log(Number(true)) // 1

// console.log(Number(false)) // 0
// console.log(Number('')) // 0
// console.log(Number(null)) // 0

// console.log(Number(undefined)) // NaN

// console.log(Number([])) // 0
// console.log(Number({})) // NaN

// Operdador de adición o suma
console.log(+'24' + +'2')
console.log(+true + +true)
console.log(+null)
console.log(+false)
console.log(Number('24') + Number('2'))

// Más Info: https://www.notion.so/academlo/Coerci-n-de-Tipos-a85c5d617ee54a34b85ed12d13131734
