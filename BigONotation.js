/**
 * BigONotation
 *
 * Big O describes how the runtime of an algorithm increases as it's input increases
 * Created by joshuabrown on 8/3/17.
 */

/**
 * This has Constant runtime regardless of input size
 * Big O Notation "O (1)" or "Oh of One"
 * @param arr
 */
function log(arr) {
  console.log(arr[0]);
  console.log(arr[1]);
}

// log([1, 2, 3, 4]);
// log([1, 2, 3, 4, 5, 6, 7, 8, 9]);

/**
 * Linear runtime
 * Big O Notation "0 (n)" or "Oh of N"
 * double the input, double the runtime
 * @param arr
 */
function logAll(arr) {
  arr.forEach(function(element) {
    console.log(element);
  });
}

// logAll([1, 2, 3, 4]);
// logAll([1, 2, 3, 4, 5, 6, 7, 8, 9]);

/**
 * Exponential runtime
 * Big O Notation "0 (n^2)" or "Oh of N squared"
 * double the input, double the runtime
 * @param arr
 */
function addAndLog(arr) {
  arr.forEach(function(e, i) {
    arr.forEach(function(f, j) {
      console.log(arr[i] + arr[j]);
    });
  });
}
console.time('4elem');
addAndLog([1, 2, 3, 4]);
console.timeEnd('4elem');

console.time('8elem');
addAndLog([1, 2, 3, 4, 5, 6, 7, 8]);
console.timeEnd('8elem');



/**
 * Logarithmic runtime
 * Big O Notation "0 (log n)" or "Oh of Log N"
 *
 * this only works on sorted lists for arg array.
 * @param arr
 */
function binarySearch(array, key) {
  var low = 0,
      high = array.length - 1,
      mid,
      element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    element = array[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
