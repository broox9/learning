//functions are function object combinations
function UserCreator(name, score) {
  /**
   * `this` is an autoCreated objected with a property called __proto__
   * this: { __proto__: <Reference to UserCreator.prototype> }
   */
  this.name = name;
  this.score = score;
}

//UserCretore.prototype is an empty POJO that gets stored and bound to the FunctionObject
UserCreator.prototype.increment = function () {
  this.score++;
};

const user8 = new UserCreator('Yvonne', 11); //mutates the execution context
user8.increment();

UserCreator.prototype.anotherIncrement = function () {
  add1() {
    this.score++; // GOTCHA this refers to window so now we will have window.score
  }
  add(); // GOTCHA, this is `window`. Instead use and arrow function add1 => () {this.score++}
}
const user9 = new UserCreator('Lee', 12); //mutates the execution context
user9.increment();

/**
 * once the constructor is run, the execution context is removed from the stack and is removed
 * `this` in the "backpack" is totally unlrelated than the one defined in the function.
 * once the EXECUTION CONTEXT is created when the `increment` method is invoked, `this` always refers
 * to the object to the left of the dot.
 * 
 * user8.increment() -> is not in local memory -> checks userCreator.__proto__ -> referenced to UserCreator.prototype
 * this.score will check for `this` in local memory (nope) and then check the `this` reference on the left user8 (yes) and finds score
 */
