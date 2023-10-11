# Objectives of big O notation

1. Why we need big o notation
2. Describe what Big O notation is
3. Simplify Big O expressions
4. Define time conplexity and space complexity
5. evaluate the time complexity and space complexity of different algorithms using big o notation
6. Describe what a logarithm is
7. why we need big o notation

imagine we have multiple implementation of a same function

how can we determine which is the best

with big o notation we can find which is best


### Introducing Big O

1. Big O Notation is a way to formalize fuzzy counting
2. it allows us to talk formally about how the runtime of an algorithm grows as the inputs grow


### Big O Definition

we say than an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

1. f(n) could be linear (f(n)= n)
2. f(n) could be quadratic (f(n)= n^2)
3. f(n) could be constant (f(n)= 1)
4. f(n) could be something entirely different.

### Big O Shorthand

(run time is constant)
1. Arithmetic operations are constant
2. variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.


Space Complexity

as the n grows, the size of the input will also grow

the term auxiliary space complexity refers to space required by the algorithm, not including space taken up by the inputs.

space complexity in js

1. Most primitives (boolean, numbers, undefined, null) are constant space
2. Strings require O(n) space (where n is the string length)
3. Reference tyes are generally O(n), where n is the length (for arrays) or the number of keys (for objects).

Logarithms

what a log?

A logarithm is the power to which a number must be raised in order to get some other number. for example, the base ten logarithm of 100 is 2, because ten raised to the power of two is 100,
log 100 = 2. -> 10^2 = 100
log(3)8 = 3. -> 2^3 = 8 