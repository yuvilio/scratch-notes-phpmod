document.addEventListener('DOMContentLoaded', function (event) {
  console.log('here is 003-literals')

  {
    let name = 'Stellar'
    let title = 'Executive Offer'
    let crewman = {
      name,
      title
    }
    console.log(crewman) // {name: "Stellar", title: "Executive Offer"}
  }

  {
    let name = 'Stellar'
    let title = 'Executive Offer'
    let crewman = {
      name,
      title,
      announce () {
        return this.title + ' ' + this.name + ', reporting for duty!'
      }
    }
    console.log(crewman.announce()) // Executive Offer Stellar, reporting for duty!
  }

  {
    let name = 'Stellar'
    let title = 'Executive Offer'
    let crewman = {
      name: 'Wilco',
      title: 'Janitor Second Class',
      announce () {
        return this.title + ' ' + this.name + ', reporting for duty!'
      }
    }
    console.log(crewman.announce()) // Executive Offer Stellar, reporting for duty!
    console.log(name, title) // Stellar Executive Offer
  }

  {
    let name = 'Stellar'
    let title = 'Executive Offer'
    let crewman = {
      name,
      title,
      'announce yourself' () { // function name can be a phrase
        return this.title + ' ' + this.name + ', reporting for duty!'
      }
    }
    // use [] notation for functions with spaces
    console.log(crewman['announce yourself']()) // Executive Offer Stellar, reporting for duty!
  }

  {
    let name = 'Stellar'
    let title = 'Executive Offer'
    let crewman = {
      name,
      title,
      '🎙' () { // using a microphone emoji as function name
        return this.title + ' ' + this.name + ', reporting for duty!'
      }
    }
    // use [] notation for functions with special charachters like emojis
    console.log(crewman['🎙']()) // Executive Offer Stellar, reporting for duty!
  }

  {
    let field = 'name' // dynamic property name
    let methodField = 'announce'
    let name = 'Stellar'
    let crewman = {
      [field]: name,
      [methodField + '01'] () {
        // using dynamic property name with brackets
        return this[field] + ', reporting for duty!'
      }
    }
    console.log(crewman[methodField + '01']()) // Stellar, reporting for duty!
  }

  {
    // i want to store the crew name plainly and keep track of it's order. i'll use an array and setter to manager it
    // getting wise, i want to get the number of the name along with the name when displaying. i'll use a getter
    let crew = {
      crew: [],
      get 'current' () { return this.crew.slice(-1)[0] },
      set 'current' (name) { this.crew.push(this.crew.length + ': ' + name) }
    }

    // notice the front end knows nothing about the array data structure nor that the data is available only
    // in the 'number: name' format i'm enforcing with my setter
    // to the outside, we're still just using '=' and overloading it's functionality
    crew.current = 'Stellar'
    console.log(crew.current) // 0: Stellar
    crew.current = 'Wilco'
    console.log(crew.current) // 1: Wilco
  }

  // can use a dynamic field name with getters and setters
  {
    let field = 'current'
    let crew = {
      crew: [],
      get [field] () { return this.crew.slice(-1)[0] },
      set [field] (name) { this.crew.push(this.crew.length + ': ' + name) }
    }

    crew[field] = 'Stellar'
    console.log(crew.current) // 0: Stellar
    crew[field] = 'Wilco'
    console.log(crew.current) // 1: Wilco
  }

  {
    let crew = ['Stellar', 'Dorf', 'Wilco']
    // iterate through array
    for (let crewman of crew) {
      console.log(crewman)
    } // Stellar , Dorf , Wilco
  }

  {
    let crew = ['Stellar', 'Dorf', 'Wilco']
    // want to use an index? set one
    let i = 0
    for (let crewman of crew) {
      i++
      console.log(i + ': ' + crewman)
    } // 1: Stellar, 2: Dorf, 3: Wilco
  }

  {
    // use backticks for template strings and ${} to interpolate variables
    let thanks = 'Thank You, Thank YOU, thank you thank you thank you'
    console.log(`I'd like to thank each and every one of you. So.. ${thanks}`)
    // I'd like to thank each and every one of you. So.. Thank You, Thank YOU, thank you thank you thank you
  }

  {
    // a nice thing about templates literals is letting you break up a string to many lines without fuss
    let thanks = `Thank You, Thank YOU, Thank you...
    thank you thank you thank you
    thank you thank _you`
    console.log(`I'd like to thank _each_ and every one of you:
    So.. ${'ahem..: ' + thanks}`) // expressions are allowd in the interpolation
    // I'd like to thank _each_ and every one of you:
    //     So.. ahem..: Thank You, Thank YOU, Thank you...
    //     thank you thank you thank you
    //     thank you thank _you
  }

  {
    let thankCrewTags = (segments) => console.log(segments) // ["I'd like to thank"]
    thankCrewTags`I'd like to thank` // invoke the tag (function) passing it the template string (no parentheseses)
  }

  console.log('here')

  {
    let thankCrewTags = (segments, ...values) => console.log(segments, values)
    // you get two arrays, the string segments (non-interpolated) and the values (interpolated). in separate arrays
    // ["I'd like to thank. ", ". Ahem, so ", "", raw: Array(3)] (2)
    // ["each and every one of you", "Thank you,.. Thank you.. thank you"]
    let thankee = 'each and every one of you'
    let firsts = 'Thank you,.. Thank you.. thank you'
    thankCrewTags`I'd like to thank. ${thankee}. Ahem, so ${firsts}`
  }

  {
    let thankCrewTags = (segments, ...values) => {
      let overture = segments[0]

      return overture + '. ahem: ' + values[0]
    }

    let thankee = 'each and every one of you'
    let firsts = 'Thank you,.. Thank you.. thank you'
    console.log(thankCrewTags`I'd like to thank. ${thankee} ${firsts}`)
  }

  {
    // destructure an array by assigning each item to a variable
    // notice we can capture some using the spread with a variable
    let medbayOccupants = ['Wilco', 'Stellar', 'Jebba', 'Doc']
    let [visitor, patient, ...staff] = medbayOccupants
    console.log(patient, staff) // Stellar ["Jebba", "Doc"]
    visitor.concat('') // trivial
  }

  {
    // you can skip elements when destructuring. use commas to move to the next element
    // you can add default values in case the array doesn't provide ones at that index spot
    let medbayOccupants = ['Wilco', 'Stellar', 'Jebba', 'Doc']
    let [visitor, patient, , , maint = 'Janitor'] = medbayOccupants
    console.log(patient, maint) // Stellar Janitor
    visitor.concat('')
  }

  {
    // you can destructure an array within an array. it's recursive. just use an array destructure
    let medbayOccupants = ['Wilco', 'Stellar', ['Jebba', 'Doc']]
    let [visitor, , [researcher, doctor]] = medbayOccupants
    console.log(researcher) // Jebba
    visitor.concat('')
    doctor.concat('')
  }

  {
    // functions can also destructure passed input in their parameters. here we grab parameters from within a passed in array
    let medbayReport = ([visitor, patient, ...others]) => 'Current patient: ' + patient
    let medbayOccupants = ['Wilco', 'Stellar', 'Jebba', 'Doc']
    console.log(medbayReport(medbayOccupants))
  }

  {
    // destructuring an object
    let medbay = {
      patient: 'Stellar',
      visitor: 'Wilco',
      report () {
        return `patient ${this.patient} treated with visitor ${this.visitor} visiting `
      }
    }

    // you don't have to list every property you want to grab
    let {patient, visitor} = medbay
    console.log(`${patient} , ${visitor}`) // Stellar , Wilco

    console.log(medbay.report()) // patient Stellar treated with visitor Wilco visiting
  }

  {
    let medbay = {
      patient: 'Stellar',
      visitor: 'Wilco',
      report () {
        return `patient ${this.patient} treated with visitor ${this.visitor} visiting `
      }
    }

    // want to map the properties to different names? use propname: varname in the descturturing
    let {patient: currentPatient, visitor: currentVisitor} = medbay
    console.log(`${currentPatient} , ${currentVisitor}`) // Stellar , Wilco
  }

  {
    let medbay = {
      patient: 'Stellar',
      visitor: 'Wilco',
      report () {
        return `patient ${this.patient} treated with visitor ${this.visitor} visiting `
      }
    }

    // the variables used in destructuring can be declared separately
    // just wrap the destructuing expression in () so that the compiler doesn't get confused by the {} to be code blocks
    // rather what it is (an object)
    let currentPatient, currentVisitor
    ({patient: currentPatient, visitor: currentVisitor} = medbay)
    console.log(`${currentPatient} , ${currentVisitor}`)
  }

  {
    let [start, , end] = 'a-z'
    console.log(`${start} - ${end}`)
  }

  {
    // you can destructure an array in a for loop to assign variables it's parts from the get go
    let partners = [['Wilco', 'Stellar'], ['Dorf', 'Kielbassa']]
    for (let [partnerA, partnerB] of partners) {
      console.log(` ${partnerA} with ${partnerB}`)
    }
  }
})
