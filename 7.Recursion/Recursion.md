# Recursion

### Objectives

1.  Define what recursion is how it can be used
2.  Understand the two essential components of a recursive function
3.  Visualize the call stack to better debug and understand recursive functions
4.  use helper method recursive and pure recursive to solve more difficult problems

## What is recursion?

A process (a function in our case) that calls itself

## The call stack

1.  it's a stack data structure - we'll talk about that later!
2.  Any time a function is invoked it is placed (pushed) on the top of the call stack
3.  When javascript sees the return keyword or when the function ends, the compiler will remove (pop)

## How recursive functions work

Invoke the same function with a different input until you reach your base case.

Base Case:

1.  The condition when the recursion ends.
2.  This is the most important concept to understand.

Two essential parts of a recursion function!

1.  base case
2.  different input

Our first recursive function

```javascript
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(5);
//output:
// 5
// 4
// 3
// 2
// 1
// All done!
```

Our second recursive function

```javascript
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
// sumRange(4);
//output:
// 4 + sumRange(3)
//       3 + sumRange(2)
//                2 + sumRange(1)
//                        1
// 4+3+2+1 = 10
```

Factorial example with non recursive method.

```javascript
function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}
//factorial(4)
// 4*3*2*1 = 24
```

Factorial example with recursive method.

```javascript
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
// factorial(3)
// 6
// factorial(5)
// 120
```

Where things go wrong

1. No base case or base case is wrong
2. Forgetting to return or returning the wrong thing!
3. Stack Overflow!

HELPER METHOD RECURSION

Example Pattern for helper method recursion

```javascript
function outer(input) {
  var outerScoperVariable = [];
  function helper(helperInput) {
    //modify the outerScoperVariable
    helper(helperInput--);
  }
  helper(input);
  return outerScoperVariable;
}
```

Another example pattern for helper method recursion

```javascript
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}
```

Pure Recursion

Example

```javascript
function collectOddvalues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddvalues(arr.slice(1)));
  return newArr;
}
```

Pure Recursion Tips

1. For arrays, use methods like slice, the spread operator and concat that make copies of arrays so you do not mutate them.
2. Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings.
3. To make copies of objects use Object.assign, or the spread operator.
