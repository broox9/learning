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
function fibonnaci(n, memo, index) {
  let internalMemo = memo || [1, 2]
  let internalIndex = typeof index === number ? index : 2;
  
  if (memo.length === (n - 1)) {
    return memo[n - 1];
  }

  memo.push(memo[index - 1] + memo[index -2]);
  fibonnaci(n, internalMemo, internalIndex);
}



(function(n) {
  let suffix = 'th';
  let numAsArray = n.toString() .split('');
  let lastDigit = numAsArray[numAsArray.length - 1];

  switch(lastDigit) {
    case '1':
      suffix = 'st';
      break;
    case '2':
      suffix = 'nd';
      break;
    case '3':
      suffix = 'rd';
    default:
  }
  console.log(`${n}${suffix} fibonnaci number is ${fibonnaci(n).toString()} (with a 0 base)`);
})(n = process.argv[2] || 8)