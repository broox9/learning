// "new": functions are function object combinations
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

// "class".  Syntax suger. Make it pretty
class UserCreatorClass {
  constructor(name, score) { //familiar
    this.name = name;
    this.score = score;
  }
  increment() { // masked 
    this.score++;
  }
}

// SUBCLASSING -------------------------------------------------/
