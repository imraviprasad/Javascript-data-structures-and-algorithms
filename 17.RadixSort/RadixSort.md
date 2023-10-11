Radix Sort
(integer sort)

1. Radix sort is a special sorting algorithm that works on lists of number

2. it never makes comparisons between elements

3. It exploits the fact that information abut the size of a number is encoded in the numbers of digits.

4. More digits means a bigger number

Radix Sort Helpers

In order to implement radix sort, its helpful to build a few helper functions first:

getDigit(num,place) - returns the digit in num at the given place value

digitCount(num) - returns the number of digits in num

mostDigits(nums) - given an array of numbers, return the number of digits in the largest numbers in the list

Radix sort pseudocode

1. Define a function that accepts list of numbers
2. Figure out how many digits the largest number has
3. Loop from k = 0 up to this largest number f digits
4. For each iteration of the loop:
   1. 'create buckets for each digit (0 to 9)
   2. place each number in the corresponding bucket based on its kth digit
5. Replace our existing array with values in our buckets, starting with 0 and going up to 9
6. return list at the end!

```javascript
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
```
