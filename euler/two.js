/** Project Euler #2 
 * 
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms.
 * By starting with 1 and 2, the first 10 terms will be:
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * 
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

const LIMIT = 4000000
let memory = [0, 1] // seeding isn't cheating punks
let total = 0
let evenTotal = 0

function fibonacci(term1, term2) {
  const nextEntry = term1 + term2
  const memoryLen = memory.length

  if (nextEntry > LIMIT) {
    return void 0;
  }

  total += nextEntry
  memory.push(nextEntry)

  if (nextEntry % 2 === 0) {
    evenTotal += nextEntry
  }

  return Fibonacci(memory[memory.length - 2], memory[memory.length - 1])
}

function solveProblem() {
  Fibonacci(memory[0], memory[1])
  console.log('TOTAL: %d, EVEN_TOTAL: %d / Memory Length - %d', total, evenTotal, memory.length)
}

solveProblem()