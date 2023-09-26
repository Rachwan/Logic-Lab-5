// Ex 1.1

/*
    Input: [1, 3, 5, 7]
    Output: [7, 5, 3, 1]
*/

function reverseTheArray(array) {
    let reversedArray = [];
    let count = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray[count] = array[i];
        count++;
    }
    return reversedArray;
}
let nums = prompt(
    "Enter you numbers with a space in between (1 2 3 4 5) for example:"
);
let array = nums.split(" ");
console.log(reverseTheArray(array));

// Ex 1.2

let sum = 0;
function averageOfarray(array) {
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        return sum / array.length;
    }
}

nums = prompt("Enter an array of numbers seperated by , please:");
console.log(averageOfarray(nums));