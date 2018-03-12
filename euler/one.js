/** Project Euler #1 
 * 
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
*/

const LIMIT = 1000
const valueSet = {}; // could use a set or a POJO for this to get instance lookup
let total = 0

function doMultiplication(num, multiplier) {
  const newValue = num * multiplier
  if (!num || !multiplier || (newValue >= LIMIT)) {
    return void 0;
  }


  if (!valueSet[newValue]) {
    valueSet[newValue] = null
    total += newValue
  }

  return doMultiplication(num, ++multiplier)
}

function solveProblem() {
  doMultiplication(5, 1)
  doMultiplication(3, 1)

  console.log(total) //233168
}


solveProblem()