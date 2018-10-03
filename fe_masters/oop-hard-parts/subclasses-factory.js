// Subclassing with solution 2 : Factory Function
function userCreator2(name, score) {
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctions = {
  sayName: function () {
    console.log("I'm " + this.name);
  },
  increment: function () {
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
  increaseBalance: function () {
    this.accountBalance++;
  }
};

//We still need the userFunctions methods
Object.setPrototypeOf(paidUserFunctions, userFunctions);

const paidUser1 = paidUserCreator2('Alyssa', 8, 25);
paidUser1.increaseBalance();
paidUser1.sayName();
