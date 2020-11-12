/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(food){  //adds food to the stomach array.
  if(this.stomach.length < 10){
    this.stomach.push(food)
  }
}

Person.prototype.poop = function(){     //resets the stomach array.
  this.stomach = []
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`
}

const personOne = new Person("Neo", 20);

console.log(personOne.toString());
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon ) {
  this.model = model;
  this.milesPerGallon= milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
const carOne = new Car("BatMobile", 20);

Car.prototype.fill = function (gallons){
  return this.tank += gallons ;
}

Car.prototype.drive = function (distance){

  let maxDistance = (this.tank * this.milesPerGallon); 
  
  if(distance < maxDistance){
    this.odometer += distance;
    this.tank = (maxDistance - distance) / this.milesPerGallon

  } else if(distance >= maxDistance){
    this.odometer += maxDistance;
    this.tank = 0
    return `I ran out of fuel at ${this.odometer} miles!`;
  }

}

carOne.fill(20);
console.log(carOne);

console.log(carOne.drive(40));
console.log(carOne);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age,favoriteToy) {
  Person.call(this, name, age,);
  this.favoriteToy = favoriteToy 
}

Baby.prototype = Object.create(Person.prototype); 


Baby.prototype.play = function (){
  return `Playing with ${this.favoriteToy}`
}


const babyPerson = new Baby("Lucy", 5, "trains");



console.log(babyPerson)
console.log(babyPerson.play());

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:

  1.  Window/Global Object Binding

        When you use the "this" keyword in a global scope "this" gets binded to the window/console object.

  2. Implicit Binding

        Whenever a dot is followd by a function the object before the dot will be what "this" is binded to.
        const object = {
          1stKey: 'Hi',
          keyname: function (){
            console.log(`${this.1stKey} world`)
          }
        }
        object.keyname()
            // output: `Hi world`

  3. Explicit binding

        When we use the call or apply method the "this" keyword is explicitly defined to be used with a new function. 

  4. New binding

        When we use a constructor function the "this" keyword refers to another specific object and returns a new object at the end.



*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
