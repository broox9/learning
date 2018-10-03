// Subclassing with solution 4 : ES2015 class
// `CLASS` makes a FunctionObject combination like the rest of them
class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  sayName() {
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
