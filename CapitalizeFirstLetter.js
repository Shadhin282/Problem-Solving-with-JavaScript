// Problem 9: Capitalize First Letter of Each Word  [Easy]
// Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
// Example:
// Input: 'hello world'  → Output: 'Hello World'
// Hint: Use split(' '), map(), and join(' ').

function titleCase(str){
    if(typeof str !== 'string'){
        return str + ' is not a string'
    }

    const splitWord = str.split(' ').map((x)=>  x[0].toUpperCase() + x.slice(1)).join(' ')

    return splitWord;
}

console.log(titleCase('javaScript is fun'))