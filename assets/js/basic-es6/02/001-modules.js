// we'll keep the modules used in the exmaples up here since
// "'import' and 'export' may only appear at the top level"
import { hello } from './modules/test-module.js'

// you can import multple exported things from a module
// you can also rename them using 'as' if that helps
import { matineeMovie, mainMovie as featureFilm } from './modules/002-multiple-exports.js'

// you can import the designated default exported item from a module . no curly brackets to indicated you're exporting
// the default . also the naming is up to you:
import flickPrice from './modules/003-default-export.js'

// you can import everything a module exports into an object , using the *
import * as cinemaNowPlaying from './modules/004-wildcard-object-import.js'

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('here is 001-modules')

  // use a value fetched from a module
  console.log(hello) // hey there , from this module variable

  console.log(`playing today  first is ${matineeMovie} and then ${featureFilm}`) // playing today  first is Space Quest 5 and then Tango & Cash 27

  console.log(`current flick price: ${flickPrice}`) // current flick price: 12 Buckzoids

  console.log(`now playing ${cinemaNowPlaying.currentFlick} for only ${cinemaNowPlaying.price}!`) // now playing Tango & Cash 27 for only 12 Buckzoids!
})
