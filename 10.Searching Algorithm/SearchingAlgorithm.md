# Searching Algorithms

Objective

1.  Describe what a searching algorithm is
2.  Implement linear search on arrays
3.  Implement binary search on sorted arrays
4.  Implement a naive string searching algorithm
5.  Implement the KMP string searching algorithm

How do we search?

Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want.

Javascript has search(inbuilt in javascript)

1.  indexOf
2.  includes
3.  find
4.  findIndex

Linear Search

Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set. It is the easiest searching algorithm.

Linear Search Pseudocode

1. This function accepts an array and a value
2. Loop through the array and check if the current array element is equal to the value
3. If it is, return the index at which the element is found
4. If the value is never found, return -1

Example for linear search

```javascript
function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// LinearSearch ([1,3,4,5,6,3,5,8], 4) // 2
// LinearSearch ([1,3,4,5,6,3,5,8], 9) // -1
```

Time complexity is O(N)
As the length of the array increases, the runtime also increases.

Binary Search

1. Binary search is a much faster form of search
2. Rather than eliminating one element at a time, you can eleminate half of the remaining elements at a time
3. Binary search only works on sorted arrays!

It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

Binary Search Pseudocode

1. This function accepts a sorted array and a value
2. Create a left pointer at the start of the array, and a right pointer at the end of the array
3. While the left pointer comes febore the right pointer:
4. Create a pointer in the middle
5. If you find the value you want, return the index
6. If the value is too small, move the left pointer up
7. If the value is too large, move the right pointer down
8. If you never find the value, return -1

Example

```javascript
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    console.log(start, middle, end);
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
}
// binarySearch([2,5,6,9,13,15,28,30],15)
```

Naive String Search

1. suppose you want to count the number of times a smaller string appears in a longer string
2. A Straightforward approach involves checking pairs of characters individually.

Pseudocode

1. Loop over the longer string
2. Loop over the shorter string
3. If the characters don't match, break out of the inner loop
4. If the characters do match, keep going
5. If you complete the inner loop and find a match, increment the count of matches
6. Return the count

Naive String Search Implementation

Example:

```javascript
function naiveSearch(long, short) {
  var count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}
naiveSearch("lorie loled", "lol");
```
