//because it's a rite of passage
//process.argv
// 0: node bin
// 1: filepath/filename
// 2+: argument n + 2
// just run this as a node script

//Assumption of base 0
// function fibonnaci(n) {
//   const arr = [0, 1];

//   for (let i = 2; i < n; i++) {
//     arr.push(arr[i-2] + arr[i-1]);
//   }
//   return arr[n - 1]
// }

/* non memoized */
function fibonnaci(n) {
  if (n == 1 || n == 0) return n

  return fibonnaci(n - 1) + fibonnaci(n - 2);
}

module.exports = fibonnaci

// function (n = (process.argv[2] || 8)) {
//   console.log('N is', n)
//   let suffix = 'th';
//   let numAsArray = n.toString().split('');
//   let lastDigit = numAsArray[numAsArray.length - 1];

//   switch (lastDigit) {
//     case '1':
//       suffix = 'st';
//       break;
//     case '2':
//       suffix = 'nd';
//       break;
//     case '3':
//       suffix = 'rd';
//       break;
//     default:
//       suffix = suffix;
//   }
//   const result = fibonnaci(n);
//   console.log(`${n}${suffix} fibonnaci number is ${result.toString()} (with a 0 base)`);
//   return result
// }