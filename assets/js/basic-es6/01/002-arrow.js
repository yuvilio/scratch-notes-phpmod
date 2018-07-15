document.addEventListener('DOMContentLoaded', function (event) {
  console.log('here is 002-arrow')

  console.log('shorthand for a function')
  let getPrice = () => 2.45 // shorthand for anonmyous function. no 'function' wrapping or 'returns'
  // says this function returns 2.45
  console.log(typeof getPrice) // its a 'function' type
  console.log('getPrice(): ', getPrice()) // 2.45

  let getPriceArgs = (count, added) => count * 3.00 + added // passing arguments to the function
  console.log('getPriceArgs(2, 4): ', getPriceArgs(2, 4)) // 10

  let getPriceBlock = (count, taxed) => { // add {} when needing more than one line of code
    let price = count * 2
    if (taxed) {
      price *= 1.055
    }
    return price // you'll need the return if using a block for the function
  }
  console.log('getPriceBlock(5, true): ', getPriceBlock(5, true)) // 10.55

  // not set to element receiving the event. it's set to the context of the code
  // document.addEventListener('click', () => { console.log(this) } )  //global context . Undefind or maybe Window object
  document.querySelector('.btn-arrow').addEventListener('click', () => console.log(this)) // global context . Undefind or maybe Window object

  let invoice = {
    number: 323,
    process: function () {
      console.log('invoice this: ', this)
    }
  }
  invoice.process() // you get the object literal(invoice)

  let invoiceProcessArrow = {
    number: 323,
    process: () => console.log('invoiceProcessArrow.process(): ', this)
  }
  invoiceProcessArrow.process() // context o the code (document object or Window)

  let getPrice2 = () => 2.45
  console.log('getPrice2.hasOwnProperty(\'prototype\')', getPrice2.hasOwnProperty('prototype')) // chrome might still show true but that may be in flux. try it in a node console and you'll get false

  let getShippedItems = (count = 500) => 'items shipped:' + count
  console.log(getShippedItems()) // 'items shipped:500'

  // filling in some parameters
  let getShippedItemsLabel = (count = 500, itemType = 'orange') => count + ', ' + itemType
  console.log(getShippedItemsLabel(undefined, 'kiwi')) // '500, kiwi'

  let getCostWithVAT = (price, vatTax = price * 0.08) => price + vatTax
  console.log(getCostWithVAT(10)) // 10.8

  // after first arg, rest will go into crew array
  let getCrewManifest = (ship, ...crew) => ship + ':' + crew.join(', ')
  console.log(getCrewManifest('SES Heinz 57', 'Stellar', 'Wilco', 'Dorf')) //  SES Heinz 57:Stellar, Wilco, Dorf

  let getCrewManifest2 = (ship, ...crew) => crew instanceof Array // true
  console.log(getCrewManifest2('SES Heinz 57', 'Stellar', 'Wilco', 'Dorf'))

  let ranks = [32, 2, 55, 23]
  let maximumRank = Math.min(...ranks) // spread (splits to individual arguments)
  console.log(maximumRank) // 2

  // handy when you need to pass individual args but they're in an array
  let crewProfile = (name, rank) => 'Crewman: ' + name + 'Rank: ' + rank
  let crewPersonnelEntry = ['Stellar', 'Executive Officer']
  console.log(crewProfile(...crewPersonnelEntry)) // crewProfile(..crewPersonnelEntry)

  // note that spread flattens arrays (rather than creating arrays of arrays)
  console.log(['a', ...'hello']) // ["a", "h", "e", "l", "l", "o"]
})
