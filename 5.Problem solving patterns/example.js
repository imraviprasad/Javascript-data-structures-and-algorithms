function sameFrequency(a, b) {
  if (a.length !== b.length) return false;
  let a1 = a.toString().split("").sort().join("");
  let b1 = b.toString().split("").sort().join("");
  if (a1 === b1) {
    return true;
  }
  return false;
}

console.log(sameFrequency(12345, 54321))

