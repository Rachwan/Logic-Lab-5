function sortingAnArray(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let element = array[j];
                array[j] = array[j + 1];
                array[j + 1] = element;
            }
        }
    }
    return array;
}
array = prompt("Enter an array use numbers seprated by , :").split(",");
console.log(sortingAnArray(array));