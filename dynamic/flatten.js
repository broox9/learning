let count = 0;
function flatten(arr) {
  return arr.reduce((acc, item) => {
    // console.log('Arr', arr)
    return acc.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

const example = [1, [2], [3, [[4]]]];
const example2 = [[1, 2, 3], 4, [5]];

function runFlat(ex = example2) {
  const flat = flatten(ex)
  console.log('ORIGINAL', ex)
  // console.log('FLAT', flatten(ex))
  return flat
}

console.log('\n[log 1]', runFlat(example))
console.log('\n[log 2]', runFlat(example2))

/*  stack
flatten(1)
  arr = [1,[2],[3, [[4]]]]
  index = 0
  memo = [1]
  arr.index = 1

flatten(2)
  arr = [1,[2],[3, [[4]]]] (recurses here)
  index = 0
  memo = [1]
  arr.index = 
    flatten(3)
      arr = [2] (recurses here)
      index = 0
      arr.index = 2
      memo = [1,2]

*/