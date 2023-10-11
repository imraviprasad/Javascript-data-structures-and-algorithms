Bubble sort

it is not commonly used
it is not that efficient to use
but it is a basic sorting methods to learn

[Visual representation of sorting](https://visualgo.net/en/sorting)

BubbleSort Pseudocode

1. Start looping from the end of the array towards the beginning with a variable called i
2. Start an inner loop with a variable called j from the beginning until i - 1
3. If arr[j] is greater than arr[j+1], swap thse two values!
4. return the sorted array

Time complexity of Bubble sort is O(n^2)

Implementation

Example 1:

```javascript
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

bubbleSort([37, 45, 29, 8]);
```
In this implementation, even if the array is sorted before the last iteration it will check all the elements in the array is sorted or not. That comsumes more time.

Example 2:

In this example, if there is no swap the loop will break

```javascript
function bubbleSort(arr) {
let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if(noSwap) break;
  }
  return arr;
}

bubbleSort([37, 45, 29, 8]);
```