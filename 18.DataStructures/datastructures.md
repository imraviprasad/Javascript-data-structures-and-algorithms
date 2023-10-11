Data structures

What do they do?

Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data

Why so many??

Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used.

Why care?

The more time you spend as a developer, the more likely you'll need to use one of these data structures

You've already worked with many of them unknowingly!

There is no one best data structure, they all excel in different situations... Otherwise why bother learning them all?

ES2015 class syntax

1. Explain what a class is
2. Understand how javascript implements the idea of classes
3. Define terms like abstraction, encapsulation and polymorphism
4. Use ES2015 classes to implement data structures.

What is a class?

A blueprint for creating objects with pre-defined properties and methods

Why do we need to learn this?

We're going to implement data structures as classes!

The syntax (es15 example)

```javascript
class student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

1. The method to create new objects must be called constructors

2. The class keyword creates a constant, so you can not redefine it, Watch out for the syntax as well!

Creating objects from classes

we use the new keyword

```javascript
class student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let firstStudent = new Student("colt", "steele");
let secondStudent = new Student("blue", "steele");
```

Instance Methods

```javascript
class student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.score = [];
  }
  fullName() {
    return `your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
}

let firstStudent = new Student("colt", "Steele");
firstStudent.fullName(); // "colt Steele"
```

Class Methods

```javascript
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
  static EnrollStudents() {
    return "ENROLLING STUDENTS!";
  }
}
let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 2);
```
