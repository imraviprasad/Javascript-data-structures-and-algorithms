Intermediate Sorting Algorithms

Objectives

1. Understand the limitations of the sorting algorithms we've learned so far
2. Implement merge sort
3. Implement quick sort
4. Implement radix sort

Why learn this?

1. The sorting algorithms we've learned so far don't scale well
2. Try out bubble sort on an array of 100000 elements , it will take quite some time!

Faster Sorts

1. There is a family of sorting algorithms that can improve time complexity from O(n^2) to O(n log n)
2. There's a tradeoff between efficiency and simplicity
3. The more efficient algorithms are much less simple, and generally take longer to understand
4. Let's dive in!

Merge Sort

1. It's a combination of two things - merging adn sorting!
2. Exploits the fact the array of 0 or 1 element are always sorted
3. Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

Merging Arrays

1. In order to implement merge sort, it's useful to first implement a afunction responsible for merging two sorted arrays
2. Given two arrays are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
3. This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

Merging Arrays Pseudocode

1. Create a empty array, take a look at the smallest values in each input array
2. While there are still valuse we have'nt looked at...
   1. If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
   2. If the value in the first array is larger than the value in the second array, push the value in second array into our results and move on to the next value in the second array
   3. Once we exhaust one array, push in all remaining values from the other array

Implementation

Example:
Merges two already sorted arrays.

```javascript
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
merge([100, 200], [1, 2, 3, 5, 6]);
```

MergeSort Pseudocode

1. Break up the array into halves until you have arrays that are empty or have one element
2. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
3. Once the array has been merged back together, return the merged (and sorted!) array

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort(["10", "24", "76", "73"]);
```

| Time Complexity (best) | Time Complexity (Average) | Time Complexity (worst) | Space Complexity |
| :--------------------: | :-----------------------: | :---------------------: | :--------------: |
|          O(n)          |          O(n^2)           |         O(n^2)          |       O(1)       |
