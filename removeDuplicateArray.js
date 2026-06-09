// Problem 13: Remove Duplicates from Array  [Easy]
// Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
// Example:
// Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
// Hint: Use Set or filter() with indexOf().

function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        return arr + " is not array"
    }

    let duplicateArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!duplicateArray.includes(arr[i])) {
            duplicateArray.push(arr[i]);
        }
    }
    return duplicateArray;

}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4]))