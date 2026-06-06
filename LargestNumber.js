
// Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.

function largestNumber(a,b,c){
    if(isNaN(a) && isNaN(b) && isNaN(c)){
        return "Provide a number."
    }
    if(a>b & a>c){
        return a
    } if (b>c & b>a) {
        return b
    } else {
        return c
    }
}

console.log(largestNumber(3,7,5))     // 7
console.log(largestNumber(20,15,10))  // 20
console.log(largestNumber(10,20,40))  // 40