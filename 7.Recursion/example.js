// Power Solution

function power(a, b) {
  if (b === 0) return 1;
  return a * power(a, b - 1);
}

console.log(power(2, 5));
console.log(Math.pow(2, 5));

// Factorial Solution

function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

console.log(factorial(4));

// Product of Array solution

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 4]));

// Recursive range solution

function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}

console.log(recursiveRange(10));

// Fibonacci solution

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10));

// fib(5)
//  fib(4) +         fib(3)
// fib(3) + 1         1 + 1
// 1 + 1
