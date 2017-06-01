/* using swap */
function reverse(str, index) {
  let internalIndex = index || index === 0 ? index : 0;

  if (str.length === 2) {
    return swap(str, 0, 1);
  }
  
  const backCursor = str.length - (internalIndex + 1);

  if (str.length <= 1 || backCursor <= internalIndex) {
    return str;
  }
  const internalStr = swap(str, internalIndex, backCursor);
  return reverse(internalStr, ++internalIndex);
}

function swap(str, a, b) {
  const arr = str.split('');
  const c = arr[a];
  arr[a] = arr[b];
  arr[b] = c;
  return arr.join('');
}

(function(str) {
  console.log(`the reverse of '${str}' is '${reverse(str)}'`);
})(process.argv[2] || 'brookes')