'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
  console.log('here is 001-initz ')

  let a = 3
  console.log('a = ', a)

  /* within curly braces is within a block scope */
  {
    let b = 2
    console.log('b = ', b)
  }
  // console.log('b = ', b) // uncomment this line and you'll get an error: 001-init.js:13 Uncaught ReferenceError: b is not definedat HTMLDocument.<anonymous> (001-init.js:13)

  let c = 20
  {
    let c = 4
    console.log('inner scope. c = ', c)
  }
  console.log('c = ', c) // c == 20 since this log statmentis in the scope where it is declared and defined as such

  let updateD = function () {
    d = 13 // this d is actually in the same temporal dead zone // as when d is defined. the functiona call is
    // made AFTER the let . if it were called before. d would
    // not be changed to 13
  }
  let d = null
  updateD()
  console.log('d = ', d)

  let e = 10
  for (let e = 2; e < 5; e++) {
    // the for loop having a block {}, e in here goes from 2 to 4
    console.log('loop (block scope) e = ', e)
  }
  console.log('outer block scope e = ', e)

  const ca = 12
  console.log('ca = ', ca)
  // ca = 20 // if you try to redefine it , you get a = 4
  // Uncaught TypeError: Assignment to constant variable.

  // const cb  // you get an error if you try to declare a constant
  // console.log(cb)
  // without setting a value:
  // Uncaught SyntaxError: Missing initializer in const declaration

  const cc = 44
  if (cc > 10) {
    const cc = 11 // since we're in a new block scope ({ .. } ),
    // this is a new declaration
    console.log('inner if (block) scope. cc = ', cc) // 11
  }
  console.log('outer block scope. cc = ', cc) // 44
})
