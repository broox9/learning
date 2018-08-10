/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

const numberList = new Set();

(function problem1() {
  sumOfNumBefore1000(5);
  sumOfNumBefore1000(3);
  const total = [...numberList.values()].reduce((acc, val) => {
    return acc + val
  }, 0)
  console.log('SOME OF NUMS', total); //233168
}())

function sumOfNumBefore1000(base, multiplier = 1) {
  const value = base * multiplier;
  
  if(value >= 1000) {
    return 0;
  }
  numberList.add(value);
  sumOfNumBefore1000(base, (multiplier + 1));
}