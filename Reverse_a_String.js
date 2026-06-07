// Problem 6: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').


function reverseString(str){
        if(typeof str !== 'string'){
            return str + " is not a string."
        }

        
        
        return str.split('').reverse().join('');
}

console.log(reverseString('Hello1'))

function reverseStringOptimize(str){
    if(typeof str !== 'string'){
        return str + ' is not a string.'
    }
    let reverse = '';
    for(let i= str.length-1; i>=0; i--){
        reverse = reverse + str[i];
    }

    return reverse;
}

console.log(reverseStringOptimize('Hello2'))

function reverseStringOptimizeUnicode(str){
        if(typeof str !== 'string'){
            return str + ' is not a string'
        }

        return [...str].reverse().join('')
}

console.log(reverseStringOptimizeUnicode('Hello3'))