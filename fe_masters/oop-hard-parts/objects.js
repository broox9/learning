const user1 = {
  name: 'Phil',
  score: 4,
  increment: function () {
    user1.score++;
  },
};

user1.increment();

const user2 = {};
user2.name = 'Julia';
user2.score = 5;
user2.increment = function () {
  user2.score++;
};

// best way
//Object.create always returns an empty object
const user3 = Object.create(null);
user3.name = 'Eva';
user3.score = 6;
user3.increment = function () {
  user3.score++;
};


// Factory  Function ------------------------------------- /
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
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
 * newUser { name, score, increment: } <--- this approach is not scalable because it's copied for 
 * every user, although it is easy to find
 * --------------------------------------------------
 */

const user4 = userCreator('Brookes', 7);
const user5 = userCreator('Tracie', 8);
user4.increment();

// Solution 2: Factory Function  --------------------------------------- /
/**
 * returned { name: 'Shirlty', score: 10, __proto__ }
 */
function userCreatorBetter(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log('Your logged in');
  },
};

const user6 = userCreatorBetter('Shirley', 10)
user6.increment();