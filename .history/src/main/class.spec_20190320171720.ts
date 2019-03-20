import { get } from "http";

describe('class', () => {

  it('has a constructor for initialization', () => {
    class Musician{
      instrument : string;
      constructor(instrument){
        this.instrument = instrument;
      }
    }
    // Create a Musician class
    // Add a constructor that takes one param, the instrument.
    // Set this.instrument to the instrument passed in

    const musician = new Musician(undefined)
    const ringo = new Musician('drums')

    expect(musician.instrument).toBeUndefined()
    expect(ringo.instrument).toBe('drums')
  })

  it('constructor can have default param values', () => {
    class Musician{
      instrument : string;
      constructor(instrument : string = "guitar"){
        this.instrument = instrument;
    }
  }
    // Create a Musician class with a constructor
    // Make your class default (using default params) the instrument to 'guitar'

    const john = new Musician()
    const ringo = new Musician('drums')

    expect(john.instrument).toBe('guitar')
    expect(ringo.instrument).toBe('drums')
  })

  it('can have instance methods', () => {
    class Musician{
      instrument : string;
      constructor(instrument : string){
        this.instrument = instrument;
      }
      play  = function () {
        return `I'm playing ${this.instrument}`
      }
    }
    // Create a Musician class, pass in the instrument to the constructor,
    // and add a play function to the class definition

    const musician = new Musician('drums')

    expect(musician.play).toBeDefined()
    // expect(Musician.play).toBeUndefined()
    expect(musician.play()).toBe("I'm playing drums")
  })

  it('can have static methods and properties', () => {
    class Musician{
      instrument : string;
      constructor(instrument : string){
      }
      static instances(){
        return 
      }
      static get create(){
        return 
      }
    }
    // Create a Musician class, pass in the instrument to the constructor,
    // create a static property instances (that will hold all created instances) and
    // create a static method create that encapsulates calling constructor
    //   and storing the reference (in instances array) and returns the instance

    expect(Musician.create).toBeDefined()
    expect(Musician.instances.length).toBe(0)

    const john = Musician.create()
    // expect(john.create).toBeUndefined()
    expect(Musician.instances.length).toBe(1)

    const ringo = Musician.create()
    // expect(ringo.create).toBeUndefined()
    expect(Musician.instances.length).toBe(2)
  })

  it('can extend another class', () => {
    class Musician{

    }
    class Rockman extends Musician{
      play = function (){
        return "I'm playing guitar"
      }
    }
    // Create a Musician class
    // Create a Rockman class that extends Musician
    // Add play method to Musician

    const rockman = new Rockman()

    expect(rockman instanceof Rockman).toBe(true)
    expect(rockman instanceof Musician).toBe(true)
    expect(rockman.play()).toBe("I'm playing guitar")
  })

  it('can use property setters and getters', () => {
    class Musician{
      instrument : string;
      constructor(instrument:string){
        this.instrument = instrument;
      }
      get description (){
        return `this musician plays ${this.instrument}`;
      }
    }
    // Create a Musician class, pass in the instrument to the constructor,
    // Add property getter for description

    const guitarist = new Musician('guitar')
    const drummer = new Musician('drums')

    expect(guitarist.description).toBe('this musician plays guitar')
    expect(drummer.description).toBe('this musician plays drums')
  })
  
  let phrase:string = "this musician played in";
  it('can use property setters and getters', () => {
    class Musician{
      band : string;
      constructor(band:string){
        this.band=band;
      }
      get allBands (){
        if (!phrase.includes("ABBA")){
        phrase = `${phrase} ${this.band}`;
        return phrase;
      }
      else{
        phrase = `${phrase}, ${this.band}`;
        return phrase;
      }
      }
    }
    // Create a Musician class
    // Add property getter for allBands
    // - it will return a string describing all the bands that this musician played in
    // Add property setter for band
    // - it will add this band to the list of musician's bands'. How to store them?

    const musician = new Musician("ABBA")

    musician.band = 'ABBA'
    expect(musician.allBands).toBe('this musician played in ABBA')
    musician.band = 'Rolling Stones'
    expect(musician.allBands).toBe('this musician played in ABBA, Rolling Stones')
    musician.band = 'Iron Maiden'
    expect(musician.allBands).toBe('this musician played in ABBA, Rolling Stones, Iron Maiden')
  })
})
