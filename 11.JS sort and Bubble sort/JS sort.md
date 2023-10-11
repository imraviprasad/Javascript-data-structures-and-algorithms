Elementary Sorting Algorithm

What is sorting?

Sorting is the process of rearranging the items in a collection(eg an array) so that the items ar in some kind of order.

[Visual representation of sorting](https://visualgo.net/en/sorting)

Examples

1. Sortin numbers from smallest to largest
2. Sorting names alphabetically
3. Sorting movies based on release year
4. Sortin movies based on revenue

Example

```javascript
function sort(arr) {
  return arr;
}
sort([23, 45, 6, 12, 13]);
//output: [ 6,12,13,23,45]
```

Why do we need to learn this?

1. Sorting is an incredibly common task, so it's good to know how it works
2. There are many different ways to sort thing, and different techniques have their own advantages and disadvantages.

Objectives

1. Implement Bubble Sort
2. Implement Selection Sort
3. Implement Insertion Sort
4. Understand why it is important to learn these simpler sorting algorithms.

Javascript builtin sort

["Steele","Colt","Data Structures","Algorithm"].sort()
["Algorithm","Colt","Data Structures","Steele"]
it sort alphabets from a to b

[6,4,15,10].sort()
[10,15,4,6]
[12,32,34,46,23,63,23,7654,11,51,26,32].sort()
[11,12,23,23,26,32,32,34,46,51,63,7654]
but it sort numbers according to its unicode

Telling javascrit how to sort

1. The built-in sort method accepts an optional comparator function
2. you can use this comparator function to tell javascript how you want it to sort
3. The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
4. If it returns a negative number, a should comes before b
5. If it returns a positive number, a should comes after b
6. If it returns 0, a and b are the same as far as the sort is concerned.

### Review this chart and recap after completing the bubble sort, selection sort and insertion sort

|   Algorithm    | Time Complexity (best) | Time Complexity (Average) | Time Complexity (worst) | Space Complexity |
| :------------: | :--------------------: | :-----------------------: | :---------------------: | :--------------: |
|  Bubble Sort   |          O(n)          |          O(n^2)           |         O(n^2)          |       O(1)       |
| Insertion Sort |          O(n)          |          O(n^2)           |         O(n^2)          |       O(1)       |
| Selection Sort |         O(n^2)         |          O(n^2)           |         O(n^2)          |       O(1)       |

Recap

1. Sorting is fundamental!
2. Bubble sort, selection sort, and insertion sort are all roughly equivalent
3. All have average time complexities that are quadratic
4. We can do better... but we need more complex algorithms!
