
document.addEventListener('DOMContentLoaded', function (event) {
  console.log('here is 002-classes.')

  {
    // classes are of a function type, since they have some constructor functionality built in
    class CrewMember {
      constructor () { // comes with a initializing function called 'constructor'
        console.log('constructor here. when you make an object with `new`. i can help initialize some things')
      }
    }
    let stellar = new CrewMember() // instantiate an object of that class using `new`
    // constructor here. when you make an object with `new`. i can help initialize some things

    console.log(typeof CrewMember) // function
    console.log(typeof stellar) // object
    console.log(stellar instanceof CrewMember) // true
    console.log(stellar.constructor) // function CrewMember() { _classCallCheck(this, CrewMember); }
  }

  {
    // yes, if we want, we can assign a class to a variable
    let Crew = class CrewMember {
      // no commas needed to separate different methods
      // object instances of a class can have properties of their own. associated with `this
      constructor (name, rank) {
        // one approach for instances to have properties
        this.name = name
        this.rank = rank
      }
      greet () { // class method
        return `${this.rank} ${this.name}, reporting for duty!`
      }
    }

    // each object can have it's own separate data
    let stellar = new Crew('Stellar Santiago', 'Lieutenant')
    let wilco = new Crew('Roger Wilco', 'Janitor Second Class')
    console.log(stellar.greet()) // Lieutenant Santiago, reporting for duty!
    console.log(wilco.greet()) // Janitor Second Class Roger Wilco, reporting for duty!

    // adding a method to a class, is the same as adding it to that class's prototype object
    console.log(stellar.greet === Crew.prototype.greet) // true
  }

  {
    class TerminatorDroid {
      // then the super class does some work
      constructor (model = undefined) {
        this.model = model
      }
      // you can use get/set just like with objects (for simple property wrappers)
      get 'modelNumber' () { return `model: ${this.model}` }
      getModelNumber () {
        return `model: ${this.model}`
      }

      getEmployer () {
        return `This Could be You`
      }
    }

    class Arnoid extends TerminatorDroid {
      // having the initialization happen from the efforts of two constructors
      // first, the subclass construct does some work
      constructor (model) {
        model = 'ahhnoid line ' + model
        super(model) // iff a subclass has a constructor, it is responsible for calling superclass
        // constructor (if it's only partially overriding it) and passing arguments
      }

      // partially override a method (super still needed)
      get 'modelNumber' () { return `AMN: ${super.modelNumber}` }

      // overriding a parent
      getEmployer () {
        return `Gippazoid Novelty Company`
      }
    }

    let wd = new Arnoid('wd')

    // call method that partially overrides parent's method
    console.log(wd.modelNumber) // AMN: model: ahhnoid line wd

    // use an inherited method from the superclass
    console.log(wd.getModelNumber()) // model: ahhnoid line wd

    // invoke a method that overrides it's parent's method
    console.log(wd.getEmployer()) // Gippazoid Novelty Company
  }

  {
    class TerminatorDroid {
      constructor (model = undefined) {
        this.model = model
        TerminatorDroid.count++ // increase count of droids every time a new one is created
      }

      static getCount () { // make statid data available via static method
        return TerminatorDroid.count
      }
    }
    TerminatorDroid.count = 0 // static property

    class Arnoid extends TerminatorDroid {
      constructor (model) {
        model = 'ahhnoid line ' + model
        super(model)
      }
    }

    // instantiate a few droids
    let aahnoid = new Arnoid('ahhnoid')
    let wd = new Arnoid('wd')
    console.log(`count of droids : ${TerminatorDroid.getCount()}`) // count of droids: 2
    console.log(aahnoid, wd)
  }
})
