function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] == elem) {
    return middle;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 8, 9, 12, 14, 18, 20], 12));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 8, 9, 12, 14, 18, 20], 121));

function binarySearch2(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] == elem ? middle : -1;
}

console.log(binarySearch2([1, 2, 3, 4, 5, 6, 8, 9, 12, 14, 18, 20], 12));
console.log(binarySearch2([1, 2, 3, 4, 5, 6, 8, 9, 12, 14, 18, 20], 121));

// Naive string search

function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}
console.log(naiveSearch("lorie loled", "lol"));