function writeCards(array, event) {
    let newArray = []
    for (let counter = 0; counter < array.length; counter++) {
        newArray.push(`Thank you, ${array[counter]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

function countDown(number) {
    while (number >= 0)
    console.log(number--);
}