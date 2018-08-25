/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * 
 ```
  nums1 = [1, 3]
  nums2 = [2]
  The median is 2.0

  nums1 = [1, 2]
  nums2 = [3, 4]

  The median is (2 + 3)/2 = 2.
```
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var totalLength = nums1.length + nums2.length;

  if (totalLength === 1) {
    return combinedList[1]
  }

  if (totalLength === 0) {
    return 0
  }

  var isOddLength = totalLength % 2;
  var middleCursor = Math.round(totalLength / 2) // - 1; // 0 based
  middleCursor -= isOddLength ? 1 : 0;

  var cursor1 = 0, cursor2 = 0;
  var combinedList = [];

  console.log('total / middleCursor', totalLength, middleCursor)

  for (var i = 0; i < totalLength; i++) {

    var is1Num = typeof nums1[cursor1] === 'number';
    var is2Num = typeof nums2[cursor2] === 'number';

    if (is1Num && is2Num) {
      if (nums1[cursor1] < nums2[cursor2]) {
        combinedList.push(nums1[cursor1])
        cursor1++;
      }

      if (nums2[cursor2] < nums1[cursor1]) {
        combinedList.push(nums2[cursor2])
        cursor2++;
      }
    } else {

      if (!is1Num) {
        combinedList.push(nums2[cursor2])
        cursor2++;
      } else {
        combinedList.push(nums1[cursor1])
        cursor1++;
      }

    }

  }


  var medianValue;
  if (totalLength === 2) {
    return (combinedList[0] + combinedList[1]) / 2
  }


  if (isOddLength) {
    medianValue = combinedList[middleCursor];
  } else {
    medianValue = ((combinedList[middleCursor] + combinedList[middleCursor - 1]) / 2)
  }

  return medianValue;
};

// findMedianSortedArrays([1, 4], [2, 3, 5])
// findMedianSortedArrays([1, 4, 8], [2, 3, 5, 10, 12, 13])
// findMedianSortedArrays([0, 4, 7], [2, 5, 6])
findMedianSortedArrays([4], [6])
// findMedianSortedArrays([0], [2, 5, 6])