function isPalindrome(str) {
    if (typeof str !== 'string') {
        return str + ' is not a string';
    }

    // 1. Convert the original string to lowercase
    const lowerStr = str.toLowerCase();
    
    // 2. Create the reversed lowercase string
    const reverseStr = lowerStr.split('').reverse().join('');

    // 3. Now the comparison is safe!
    for (let i = 0; i < reverseStr.length; i++) {
        if (lowerStr[i] !== reverseStr[i]) {
            return false;
        } 
    }
    return true;
}

console.log(isPalindrome('Racecar')); // Output: true (Fixed!)
console.log(isPalindrome('Hello'));   // Output: false
