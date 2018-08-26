const n = parseInt(process.argv[2]) || 5
const plus5 = n + 5
const plus10 = n + 10
console.log('N is', n)


function memWithStats(fn, context = {}) {

  context.cache = context.cache || {};
  context.skips = 0
  context.runs = 0

  return {
    s: context,
    run: (index) => {
      if (index in context.cache) {
        context.skips++;
        return context.cache[index]
      }

      context.cache[index] = fn(index)
      context.runs++;
      return context.cache[index]
    }
  }
}


const fib = memWithStats((index) => {
  if (index == 0 || index == 1) return 1
  return fib.run(index - 1) + fib.run(index - 2)
})


const factorial = memWithStats(function fac(index) {
  if (index === 1) return 1

  return index * factorial.run(index - 1)
})
// cache step 
factorial.run(n)


//
console.log('\nfibonnaci of %d = %d, runs = %d, skips = %d', n, fib.run(n), fib.s.runs, fib.s.skips)

// memoization on factorial
console.log('\Factorial of %d = %d, runs = %d, skips = %d', n, factorial.run(n), factorial.s.runs, factorial.s.skips)
console.log('\Factorial of %d = %d, runs = %d, skips = %d', plus5, factorial.run(plus5), factorial.s.runs, factorial.s.skips)
console.log('\Factorial of %d = %d, runs = %d, skips = %d', plus10, factorial.run(plus10), factorial.s.runs, factorial.s.skips)
