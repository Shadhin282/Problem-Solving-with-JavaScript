// Problem 10: Count Occurrences of a Character  [Easy]
// Description: Write a function countChar(str, char) that returns how many times a character appears in a string.
// Example:
// Input: 'banana', 'a'  → Output: 3
// Hint: Use split(char).length - 1 or a loop.

function countChar(str,char){
    if(typeof str !== 'string'){
        return str + ' is not a string'
    }

    let lowerStr = str.toLowerCase();
    let lowerChar = char.toLowerCase();

    let count = 0;

    for(let i=0; i < lowerStr.length ; i++){
            if(lowerStr[i]=== lowerChar){
                count++
            }
    }
    return count;
}

console.log(countChar('Heloo ', 'O'))