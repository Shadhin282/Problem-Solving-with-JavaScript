// Problem 7: Count Vowels in a String  [Easy]
// Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
// Example:
// Input: 'hello'   → Output: 2Input: 'javascript' → Output: 3
// Hint: Use a loop or match() with a regular expression.


function countVowels(str) {
    if (typeof str !== 'string') {
        return str + ' is not a string';
    }
    
    let count = 0;
    // We convert the whole string to lowercase once to save performance
    const lowerStr = str.toLowerCase(); 
    
    for (let i = 0; i < lowerStr.length; i++) { // 1. Fixed loop boundary
        const char = lowerStr[i];
        
        // 2. Fixed broken conditional OR logic
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
        // 3. Removed the else block entirely so the loop doesn't exit early
    }
    
    return count;
}

function countVowelsOptimize(str){

    if(typeof str !== 'string'){
        return str + ' is not string.'
    }

    const lowerStr = str.toLowerCase();

    const regularEx = 'aeiou';
    let count = 0;
    for(let i=0; i<lowerStr.length; i++){
        if(regularEx.includes(lowerStr[i])){
            count++
        }
    }

    return count;
    

}

function countVowelsOptimzeMatch(str){
    if(typeof str !== 'string'){
        return str + ' is not a string.'
    }

    // regular expression 
    const vowelRegex = /[aeiou]/gi ;

    const matches = str.match(vowelRegex);

    return matches ? matches.length : 0 ;
}


console.log(countVowelsOptimize('hello'));      // Output: 2
console.log(countVowelsOptimzeMatch("HellO World"))
console.log(countVowels('javascript')); // Output: 3
console.log(countVowels('hello'))