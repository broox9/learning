# Introductions

## 5 Capacities we look for in candidates

1. Analytical problem solving with code - now how much you know, but how can you make your way through hard problems
2. Technical Communication (can I implrement your approach just from your explanation)
3. Best Practices

## Expectations
- support each other

# Why OOP?
- Easy to add features and functionality
- Easy for us and others developers
to reason about (a clear structure)
- Performant (effecient in terms of memory)

We need to organize our code as it gets more complex so it's not just and edless series of commands

as big as functional progamming is, it's complimented in JS by OOP. We need to bundle like functionality. That is the essence of it, and the rest is making it performant

# Objects

- The principle of encapsulation.  Wrapping data and functionality in the same place
```js
// first way
const user1 = {
  name: 'Phil',
  score: 4,
  increment: function() {
    user1.score++;
  },
};

user1.increment();

// another way
const user2 = {};
user2.name = 'Julia';
user2.score = 5;
user2.increment = function() {
  user2.score++;
};

// yet another way
const user3 = Object.create(null);
user3.name = 'Eva';
user3.score = p;
user3.increment = function() {
  user3.score++;
};

```

if we keep repeating tasks, we should use a function! Lets try:
```js
// Factory  Function
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  };
  return newUser;
}

/**
 * Execution Context for <fn> userCreator('Brookes', 7)
 * --------------------------------------------------
 * ~local memory~
 * [parameter] name: [argument] 'Brookes'
 * [parameter] score: [argument] 7
 *
 * newUser { name, score, increment } <--- this approach is not scalable because it's copied for every user, although it is easy to find
 * --------------------------------------------------
 */

const user4 = userCreator('Brookes', 7);
const user5 = userCreator('Tracie', 8);
```

**Pros**
- We can call our functionality on the object that holds our data

**Cons**
- not performant scalable AT ALL because we copied the same functionality into memory many many times

Lets try:
```js
/**
 * returned { name: 'Shirlty', score: 10, __proto__ }
 */
function userCreatorBetter(name, score) {
  // how does this bond work?
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function() {this.score++;},
  login: function() { console.log('Your logged in');},
};

const user6 = userCreatorBetter('Shirley', 10)
user6.increment();
```

A better solution to save memory.  _Object.create()_ somehow creates bond to the returned object

## Prototypal nature
since `increment` and `login` aren't directly defined on directly on the object as before, JavaScript does not panic, it just checks the inherent `__proto__` key to see if the **Prototypal Nature** of JS has bound those functions up the chain


**Pros**
- We can call our functionality on the object that holds our data
- Saves memory

**Cons**
- none really, but it is slighly imperative


# The `new` Keyword and Functions and `__proto__`
`new` Automates:
- auto creates immutable object labeled `this` within the execution context
- sets `this` object's `__proto__` reference to <ThisFunction>.prototype
- implicit return the created `this` object

this will happen when using the `new` keyword no matter what.

## functions are both objects and functions :/
```js
//functions are function object combinations
function multiplyBy2(num) {
  return num * 2;
}

multiplyBy2.stored = 5; //whaaaaat?
multiplyBy2(3); // returns 6 (invokes the function)

multiplyBy2.stored // returns 5 (checks the object part)
multiplyBy2.prototype; // returns {}
```

`js __proto__ !== prototype` --> **!!!** `Function.prototype` is a NORMAL PROPERTY it is like `Promise().then`. It's a marker for what should be referenced with  __proto__ (the actual prototype chain object)

```js
//functions are function object combinations
function UserCreator(name, score) {
  /**
   * `this` is an implicit parameter (autoCreated object) with a property called __proto__
   * this: { __proto__: <Reference to UserCreator.prototype> }
   */
  this.name = name;
  this.score = score;
}

//UserCretore.prototype is an empty POJO that gets stored and bound to the FunctionObject
UserCreator.prototype.increment = function() {
  this.score++;
};

const user8 = new UserCreator('Yvonne', 11); //mutates the execution context
user8.increment();
/**
 * once the constructor is run, the execution context is removed from the stack and is removed
 * `this` in the "backpack" is totally unlrelated than the one defined in the function.
 * once the EXECUTION CONTEXT is created when the `increment` method is invoked, `this` always refers
 * to the object to the left of the dot.
 * 
 * user8.increment() -> is not in local memory -> checks userCreator.__proto__ -> referenced to UserCreator.prototype
 * this.score will check for `this` in local memory (nope) and then check the `this` reference on the left user8 (yes) and finds score
 */
```

**Pros**
- We can call our functionality on the object that holds our data
- Saves memory
- let's developers know what type of function this is
- helps with sub-classing

**Cons**
- mysterious under the hood for the vast majority of developers
- `this` defaults to window and function binding can throw it off.

## Sub Functions 
Biggest Gotcha in OOP => implicit this binding
```js
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

// Tricky
UserCreator.prototype.increment = function() {
  add1() {
    this.score++; 
  }
  add1() // GOTCHA, this is `window`. Instead use and arrow function add1 => () {this.score++}
};

const user8 = new UserCreator('Lea', 12); //mutates the execution context
user9.increment();
```

# Classes
the base case is identical under the hood, just further masked/abstracted (just like `new` is an abstraction )
```js
// "new": functions are function object combinations
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

//UserCretore.prototype is an empty POJO that gets stored and bound to the FunctionObject
UserCreator.prototype.increment = function () {
  this.score++;
};

const user8 = new UserCreator('Yvonne', 11); //mutates the execution context
user8.increment();

// "class" Syntax suger. Make it pretty
class UserCreatorClass {
  constructor(name, score) { //familiar
    this.name = name;
    this.score = score;
  }
  increment() { // masked 
    this.score++;
  }
}
```

**Pros**
- looks and feels like other languages
- nice and concise

**Cons**
- 99% of devs have no clue how it works under the hood

# Some things Built in
JavaScript uses this __proto__ link to give objects, functions and arrays a bunch of bonus functionality.  All objects by default have __proto__

```js
const obj = {
  num: 3
};

console.log(obj.num);
obj.hasOwnProperty('num');

Object.prototype // { hasOwnProperty: <fn>}
```
- hasOwnProperty `someObj ->  `__proto__` -> someObj.prototype (nope) -> `__proto__` -> Object.prototype.hasOwnProperty
- isPropertyEnumerable, constructor, toString, etc... 
- Functions, Arrays, Maps, Sets, Strings, etc are all objects as well and have access to Object.prototype and some extra functionality

## Prototype Chain
```js
// multiplyBy2['toString'] -> multiplyBy2.__proto__ (nope) -> Function.protoType.toString
multiplyBy2.toString()

//  multiplyBy2['hasOwnProperty'] -> multiplyBy2.__proto__ (nope) -> Function.protoType.__proto__ (nope) -> Object.prototype.hasOwnProperty
multiplyBy2.hasOwnProperty('score')

//  multiplyBy2['increase'] -> multiplyBy2.__proto__ (nope) -> Function.protoType.__proto__ (nope) -> Object.prototype (nope) -> Object.prototype.__proto: null
multiplyBy2.increase() // error, not a function
```


# SubClassing
a Core aspect of the OOP paradigm is inheritance, we can do this in JS using that same prototye chain JS uses within itself, and not recreate previous work

- to set `__proto__` (or in the spec ``[[prototye]]) we have to use `Object.setPrototypeOf(target, prototypeObj)`.  **WHY NOT CALL IT setProtoOf**

## Using Factory Functions
nice and sophisticated, but imperative.  Does it find all the necessary "paidUser" functions without polluting "user"? yes. It's also what `new` does under the hood.
```js
function userCreator2(name, score) {
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctions = {
  sayName: function() {
    console.log("I'm " + this.name);
  },
  increment: function() {
    this.score++;
  },
}

const user1 = userCreator2('Phil', 5);
user1.sayName();

// Sub Class - Paid User
function paidUserCreator2(paidName, paidScore, accountBalance) {
  const newPaidUser = userCreator2(paidName, paidScore);
  // set the right prototype because the constructor set's it to `userFunctions`
  Object.setPrototypeOf(newPaidUser, paidUserFunctions);
  newPaidUser.accountBalance = accountBalance;
}

const paidUserFunctions = {
  increaseBalance: function() {
    this.accountBalance++;
  }
};

//We still need the userFunctions methods
Object.setPrototypeOf(paidUserFunctions, userFunctions);

const paidUser1 = paidUserCreator2('Alyssa', 8, 25);
paidUser1.increaseBalance();
paidUser1.sayName();
```

## Using the `new` keyword

but first, call and apply
```js
const obj = {
  num: 3,
  increment: function() {this.num++}, //implicit parameter `this` === obj
};

const otherObj = {
  num: 10,
};

obj.increment(); // 4
obj.increment.call(otherObj); // 11
// obj.increment.apply(otherObj) // 11
```
`this` always refers to the object to the left of the dot on which the function (method) is
being called - unless we override that by running the function using `.call()` or `.apply()` which lets us set the value of this inside of the `increment` function.

so then we use it to call the parent class and bind the values of the sub-class.

A bit tricky. Does it find all the necessary "paidUser" functions without polluting "user"? yes. Because it's tricky, Solution 4 arose.
```js
// Subclassing with solution 3 : new Keyword
// Subclassing with solution 3 : new Keyword, pseudo classical
function UserCreator3(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator3.prototype.sayName = function () {
  console.log("I'm " + this.name);
}
UserCreator3.prototype.increment = function () {
  this.score++;
};


const user1 = new UserCreator3('Phil', 5);
user1.sayName();

// Sub Class - Paid User
function PaidUserCreator3(paidName, paidScore, accountBalance) {
  // referencial Binding UserCreator3's `this` implicit bject to the `this` implicit object of the current function. causes a side affect to mutate PaidUserCreator3's `this`
  UserCreator3.call(this, paidName, paidScore);
  this.accountBalance = accountBalance;
}

//We still need the userFunctions methods
PaidUserCreator3.prototype = Object.create(UserCreator3.prototype);
// and the paidUser specific methods
PaidUserCreator3.prototype.increaseBalance = function () {
  this.accountBalance++;
};

const paidUser1 = new PaidUserCreator3('Alyssa', 8, 25);
paidUser1.increaseBalance();
paidUser1.sayName();
```

## Using ES6+ classes
what do `class`, `super` and `extend` do under the hood?

```js
// Subclassing with solution 4 : ES2015 class
// `CLASS` makes a FunctionObject combination like the rest of them
class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  sayName(){
    console.log('I am ' + this.name)
  }
  increment() {
    this.score++;
  }
}

// can still do UserCreator.prototype.otherMethod = () => fn
const user1 = new UserCreator('Phil', 4);
const user2 = new UserCreator('Brookes', 2);

class PaidUserCreator extends UserCreator {
  constructor(paidName, paidScore, accountBalance) {
    super(paidName, paidScore);
    this.accountBalance = accountBalance;
  }
  increaseBalance() {
    this.accountBalance++;
  }
}

const paidUser1 = new PaidUserCreator('Alyssa', 8, 25);
paidUser1.increaseBalance();
paidUser1.sayName();
```

**`Class`**
just sets up a FunctionObject Combination like the previous approaches

**`Extends`**

Automates 2 things:
- sets it's own `prototype.__proto__` object to it's own  link as a reference to UserCreator.prototype (just like manual)
- sets it's `__proto__` to UserCreator (for super)


so the object FunctionObject of PaidUserCreator has both a { `prototype` and a `__proto__`} and `extends`

**`Super`**

PaidUserCreator's constructor does not initialize a `this` implicit object.  Super must be called before using `this`, and it passes the arguments to the UserCreator's constructor using

```
Reflect.construct(UserCreator, [paidName, paidScore], PaidUserCreator)
```
so PaidUserCreator's `this` implicit object is actually assigned within UserConstructor and passed back to PaidUserCreator

1. `this` is defined but empty (with no `__proto__`) & `PaidUserCreator.__proto__` is set to UserCeator
2. `extends` causes `super` to be assigned with the parent class (UserCreator) construtor **this is not how it was done when we do it explicitly**
4. `super` is called with the parameters passed into this constructor
5. `super` runs the parent class (UserCreator) constructor and assigns the return value to PaidUserCreator's implicit `this` object (thereby initializing it)
6. implicit `this` now has it's `__proto__` set and can have values attached to it, etc and runs as normal.

