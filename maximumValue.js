// Problem 12: Find Maximum Value in Array  [Easy]
// Description: Write a function findMax(arr) that returns the largest number in an array 
// without using Math.max().
// Example:
// Input: [3, 1, 7, 2, 9]  → Output: 9
// Hint: Loop through and track the largest value found.

function findMax(arr){
        if(!Array.isArray(arr)){
            return arr + " is not array."
        }

        let max = arr[0];
        for(let i = 1; i < arr.length; i++){
            if(arr[i]> max){
                max = arr[i];
            }
        }
        return max;
}

function findMaxReduce(arr){
    if(!Array.isArray(arr) && arr.length > 0){
        return 'it is not array or empty.'
    }

    return arr.reduce((max,num)=> num > max ? num : max, arr[0])
}

console.log(findMax([3,1,7,29]))
console.log(findMaxReduce([3,1,7,29]))