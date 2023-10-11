objectives

1. understand how objects and arrays work, through the lens of Big O
2. Explain why adding elements to the beginning of an array is costly.
3. Compare and contrast the runtime for arrays and objects, as well as built-in-methods.

## Objects(unordered, key value pairs)

let instructor = {
firstName: 'kelly',
isInstructor: 'true',
favoriteNumbers: [1,2,3,4]
}

When to use objects

1. When you don't need order
2. When you need fast access/insertion and removal.

Big O of Objects

Insertion - O(1)
Removal - O(1)
Access - O(1)
Searching - O(N)

(when you don't need any ordering objects are an excellnt choice.)

Big O of Object Methods

Object.Keys - O(N)
Object.Values - O(N)
Object.entries - O(N)
hasOwnProperty - O(1)

Object.Keys(instructor)
["firstName","isInstructor","favoriteNumbers"]

Depending upon the number of keys and values in an array, the length of the operation will also increase. so O(N)
(same goes for values and entries)

instructor.hasOwnProperty("firstName")
true

the value of the object is already stored and hasOwnProperty("firstName") will return if the key (firstName) is there or not. so O(1)

## Arrays (ordered lists!)

let name = ['Michael','Melissa','Andrea'];

let values = [true, {}, [], 2, "awesome"];

When to use arrays

1. when you need order
2. when you need fast access/insertion and removal (sort of....)

Big O of Arrays

Insertion - it depends....
Removal - it depends....
searching - O(N)
Access - O(1)

let name =["Michael","Melissa","Andrea"]
// 0 1 2

lets say, if we insert or remove an element at the end of the array it takes constant time, because javascript will automatially declare the index value for each element in an array.
when we insert or remove element at the end of the array it only had to add or remove only one index and it doesn't need to reindex all the elements in the array. so O(1)

But, when we insert or remove an element at the beginning of the array the index value for all the elements in the array will change thus leads to reindexing of all the elements in the array.
so it will take n number of time. O(N)

Accesing the elements in the array is fast, no matter the element is in the middle of first it takes constant time. so O(1)

For searching the elements in the array, depending upon the number of elements in the array. it has to search for all the elements in the array. so it takes n number of times. O(N)

Big O of Array operations

1. push - O(1)
2. pop - O(1)
3. shift - O(N)
4. unshift - O(N)
5. concat - O(N)
6. slice - O(N)
7. splice - O(N)
8. sort - O(N * log N)
9. forEach/map/filter/reduce/etc. - O(N)