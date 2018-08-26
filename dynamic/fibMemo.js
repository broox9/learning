// console.log(process.argv)

const n = process.argv[2] || 100
const _memo = [1, 1];
let skipTally = 0
let runTally = 0

function fibOfN(n, memo = [1, 1]) {
  runTally++;
  if (n === 1 || n === 0) return 1;

  // unmemoized
  // return fibOfN(n - 1) + fibOfN(n - 2)

  if (memo[n]) {
    // console.log(memo[n], 'skipped %d, (val) => %d', n, memo[n]);
    skipTally++;
    return memo[n];
  }

  const result = fibOfN(n - 1, memo) + fibOfN(n - 2, memo)
  memo[n] = result
  return result
}

console.log('the answer is ', fibOfN(n, _memo))
console.log('memo length %d, ran %d x, skipped %d times', _memo.length, runTally, skipTally)


/*

[1,1,2,3,5,8]
fib* => * represents a cached return

fib5 ( fib4  -- fib3 )
  fib4 ( fib3 -- fib2 )
    fib3 (fib2 -- fib1 )
      fib2 (fib1 => 1 -- fib0 => 1)
  
  fib3 ( fib2 => 2, fib1 => 1)




*/