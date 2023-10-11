Algorithms and Problem Solving approach (part 1)

Objectives

1. Define What an algorithm is
2. Devise a plan to solve algorithms
3. Compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

What is an algorithm?

A process or set of steps to accomplish a certain task.

Why do i need to know this?

1. Almost everything that you do in programming involves some kind of algorithm!
2. It's the foundation for being a successful problem solving and developer
3. Also it will help you in interviews

How do you improve?

1. Devise a plan for solving patterns
2. Master common problem solving patterns

First Up...
PROBLEM SOLVING Strategies

1. Understand the problem
2. Explore concrete Examples
3. Break it Down
4. Solve / Simplify
5. Look Back and Refactor
   (Note: many of these strategies are adapted from George Polya, whose book how to solve it is a great resource for anyone who wants to become a better problem solver)

6. Understand the problem

7. Can i restate the problem in my own words?
8. What are the inputs that go into the problem?
9. What are the outputs that should come from the solution to the problem?
10. Can the outputs be determined from the inputs? In other words, do i have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
11. How should i label the important pieces of data that are a part of the problem?

Example

Write a function which takes two numbers and returns their sum.
(you need to implement the above steps in this question)

1. can i restate the problem in my own words?
   "implement addition"
2. what are the inputs that go into the problem?
3. ints?
4. floats?
5. what about string for large numbers?
6. What are the outputs that should come from the solution to the problem?
7. int?
8. float?
9. string?
10. can the output be determined.......

11. How should i label the important pieces of data that......

12. Exploring Concrete Examples.

    1. start with simple examples(easiest usecases)
    2. Progress to More Complex Examples
    3. Explore Examples with Empty inputs
    4. Explore Examples with Invalid inputs

    Examples

Write a function which takes in a string and returns counts of each character in the string.

step 1:
charCount('aaaa'); // {a:4}
charCount ('hello'); // {h:1, e:1, l:2, o:3}

step 2:
complex example
"my phone number is 182763"

step 3:
charCount(''); // what output need to be shown if input is empty

step 4:
charCount('')
what if they pass in a array, object, null, number or not a string.

3. Break it Down

Explicitly write out the steps you need to take.
(This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well. )

Example

Write a function which takes in a string and returns counts of each character in the string.

function charCount(str){
// do something
// return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
//
}

function charCount(str){
// make object to return at end
// loop over string
// if the char is a number/letter is a key in object, add one to count
// if the char is a number/letter is not a key, add one to set value to 1
// if character is something else (space, period, etc.) don't do anything
// return object at end
}

4. Solve or Simplify
   (if you have came this far then you should have solved the problem, if you cant then simplify the problem)

```javascript
function charCount(str) {
  // make object to return at end
  var result = {};
  // loop over string, for each character...
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    //if the char is a anumber/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
}
```

5. Look back and refactor

Refactoring questions

1. can you check the results?
2. can you derive the results differently?
3. can you understand it at a glance?
4. can you use the result or method for some other problem?
5. can you improve the performance of your solution?(mainly time and space complexity)
6. can you think of other ways to refactor?
7. How have other people solved this problem?

simplified example of previous example

```javascript
function charCount(str) {}
```
