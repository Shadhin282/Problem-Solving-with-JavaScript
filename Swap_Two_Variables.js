// ```
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

// ```


// below is sharing Arthmetic operators approach
function swapValue(g,h){
     let a = g
     let b = h
        a = a + b;
        b = a - b;
        a = a - b;
        return {a,b}
}

// console.log(swapValue(a,b))
// console.log(swapValue(e=30,f=400))

function swapByDestructuring(d,e){
    [d,e] = [e,d]
    return {d,e}
}

console.log(swapByDestructuring(j=50,n=90))
