/**
 * Given a string, find the length of the longest substring without repeating characters.
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring,
 * "pwke" is a subsequence and not a substring.
 * 
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  var MAX = 0;
  var runningList = [];
  var longestString = [];
  var arr = s.split('')

  arr.forEach((letter, index, list) => {
    if (runningList.includes(letter)) {
      const nextSliceIndex = runningList.indexOf(letter) + 1
      runningList = runningList.slice(nextSliceIndex)
    }

    runningList.push(letter)

    if (runningList.length >= MAX) {
      MAX = runningList.length;
      longestString = runningList.join('');
    }

  });

  console.log('%s | MAX = %d, STRING = %s', s, MAX, longestString)
  return MAX;
};

lengthOfLongestSubstring('abcabcbb')
lengthOfLongestSubstring('bbbbb')
lengthOfLongestSubstring('pwwkew')
lengthOfLongestSubstring('dvdf')
