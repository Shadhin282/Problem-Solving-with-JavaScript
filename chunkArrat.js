// Problem 15: Chunk an Array  [Medium]
// Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size.
// Example:
// Input: [1,2,3,4,5], 2  → Output: [[1,2],[3,4],[5]]
// Hint: Use a while loop with slice().

function checkArray(arr, size){
    if(!Array.isArray(arr)){
        return arr + " is not a array"
    }
    if(isNaN(size)){
        return size + " is not number"
    }

    let chunk = [];
    let index = 0 ;

    while(index < arr.length){

        chunk.push(arr.slice(index, index + size))
        
        index += size
    }

    return chunk;
}

console.log(checkArray([1,2,3,4,5], 2))