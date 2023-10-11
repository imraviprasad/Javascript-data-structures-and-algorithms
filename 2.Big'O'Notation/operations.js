// counting operations

// example 1
function addUpto(n) {
  return (n * (n + 1)) / 2;
}

// always 3 operations O(1)
// 1 multiplication
// 1 division
// 1 division

// example 2
// function addUpto2(n) {
//   let total = 0; // 1 assignment
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// number of operations is(eventualy) bounded by the multiple of n, so O(n)
// 5n + 2
// n addition
// n assignments
// n comparisons
// depending upon the value of n 
// n operations will be carried out in this function 


// example 3

// function printAllPairs(n) {
//     for (let i = 0; i < n; i++) { 
//         for (let j = 0; j < n; j++) { 
//             console.log(i,j)
//         }
//     }
// }

// this function contains a loop inside a loop 
// O(n^2)
// n number of operations inside n numbers of operations
