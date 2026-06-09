// Problem 14: Flatten a Nested Array  [Medium]
// Description: Write a function flattenArray(arr) that flattens one level of a nested array.
// Example:
// Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]
// Hint: Use flat() or reduce() with concat().

function flattenArray(arr){
    if(!Array.isArray(arr)){
        return arr + " is not arrayl"
    }

    let flat = [];

    for( let i = 0 ; i < arr.length ; i++ ){
        let currentItem = arr[i];

        if(Array.isArray(currentItem)){
            
            for( let j = 0 ; j < currentItem[j] ; j++){
                flat.push(currentItem[j]);
            }
        } else {
            flat.push(currentItem)
        }
    }
    return flat;
}

function flattenArrayFlat(arr){
    if(!Array.isArray(arr)){
        return arr + " is not array"
    }

    return arr.flat();
}

function flattenArrayReduce(arr){
    if(!Array.isArray(arr)){
        return arr + " is not array"
    }
    return arr.reduce((acc,current)=> acc.concat(current),[]);
}

console.log(flattenArrayReduce([1, [2, 3], [4, 5]]))


console.log(flattenArrayFlat([1, [2, 3], [4, 5]]))


console.log(flattenArray([1, [2, 3], [4, 5]] ))