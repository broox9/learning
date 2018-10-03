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