function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let newArray = [];
    for (let i = 1; i < arr.length; i += 2){
        newArray.push(arr[i]);
    }
    return newArray;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let newArray = [];
    if (arr.length % 2 == 1){
        for (let i = arr.length - 2; i > 0; i -= 2){
            newArray.push(arr[i]);
        };
    } else {
        for (let i = arr.length - 1; i > 0; i -= 2){
            newArray.push(arr[i]);
        };
    }

    return newArray;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let newArray = [];
    for (let i = 1; i < arr.length; i *= 2){
        newArray.push(arr[i]);
    }
    return newArray;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let newArray = [];
    for (let i = 1; i < arr.length; i *= n){
        newArray.push(arr[i])
    };
    return newArray;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let newArray = [];
    for (let i = 0; i < Math.ceil(arr.length/2); i++){
        newArray.push(arr[i]);
    }
    return newArray;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let newArray = [];
    for (let i = Math.ceil(arr.length/2); i < arr.length; i++){
        newArray.push(arr[i]);
    }
    return newArray;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
