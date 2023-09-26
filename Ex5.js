let array = [];

while (true) {
    let choice = parseInt(prompt("Enter your choice:"));
    switch (choice) {
        case 1:
            let int = parseInt(prompt("Enter an integer to add:"));
            array.push(int);
            console.log(`Added ${int} to the array.`);
            break;
        case 2:
            console.log("The Array:", array);
            break;
        case 3:
            let value = parseInt(prompt("Enter an integer to search for:"));
            let index = array.indexOf(value);
            if (index !== -1) {
                console.log(`${value} found at index ${index}`);
            } else {
                console.log(`${value} not found in the array.`);
            }
            break;
        case 4:
            sortingAnArray(array);
            break;
        case 5:
            console.log("Exit.");
            process.exit(0);
            break;
        default:
            console.log("Error: please enter a valid number!");
    }
}
