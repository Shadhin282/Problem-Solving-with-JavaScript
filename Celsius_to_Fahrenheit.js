

// Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0   → Output: 32Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32

function toFahrenheit(celsius){
    if(isNaN(celsius)){
        return celsius + " is not a number"
    }

    let fahrenheit = celsius * (9/5) + 32

    return fahrenheit;
    
}

console.log(toFahrenheit(32))  // 89.6 F
console.log(toFahrenheit(0))   // 32 F