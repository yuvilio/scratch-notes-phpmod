// './modules/test-module.js'
let greeting = 'hey there ' // this variable isn't exported.
// not available for use outside of this module

// this variable IS exported. available to imported by other files
// it uses it's internal valriable (greeting)
export let hello = `${greeting}, from this module variable`
