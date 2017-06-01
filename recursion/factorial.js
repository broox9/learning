//because it's a rite of passage
//process.argv
// 0: node bin
// 1: filepath/filename
// 2+: argument n + 2
// just run this as a node script
function factorial(n) {
  if (n === 1) {
    return n;
  }
  
  const total = n * factorial(n - 1);
  // console.log('N = ', n);
  return total;
}

(function(n) {
  console.log('%d! (factorial) = %d', n, factorial(n));
})(n = process.argv[2] || 8)

