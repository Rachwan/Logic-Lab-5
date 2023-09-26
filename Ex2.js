// Ex 2.1

/*
    Input: [[1, 2, 3], [4, 5, 6]]

    Output:
    1 2 3 4 5 6
*/

let array = [
    [1, 2, 3, 99],
    [4, 5, 87, 6],
];

let result = "";
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        result += `${array[i][j]} `;
    }
}
console.log(result);

// Ex 2.2

/*
    Input: Array: [1, 2, 3, 4, 5], n=2
    Output: [4, 5, 1, 2, 3]
*/

function manipulateArray(array, number) {
    let output = array;
    for (i = 0; i < number; i++) {
        let num = output.pop();
        output.unshift(num);
    }
    return output;
}

let arr = prompt(
    "Enter you numbers with a space in between (1 2 3 4 5) for example:"
).split(" ");
let number = parseInt(prompt("Enter you number:"));
console.log(manipulateArray(arr, number));
