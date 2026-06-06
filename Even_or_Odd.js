

// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: trueInput: 7  → Output: false
// Hint: Use the modulus (%) operator.



function isEven(n) {
            if(n%2){        // here % modulus operator is acting as an divider, when result is 1 it clearify that that is true condition as there is a value, that's why it meet first conditon
                return false;
            } else {  // here result is o from n%2, 0 means a negative result that's why condition is showing false and false condition return;
                return true;
            }
}

console.log(isEven(5));
console.log(isEven(22));