function indexOfkey(array, value) {
    let output;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            output = i;
        } else {
            output = - 1;
        }
    }
    return output;
}

array = prompt("Enter an array use numbers seprated by , :").split(",");
value = parseInt(prompt("Enter the key number please:"));
console.log(indexOfkey(array, value));