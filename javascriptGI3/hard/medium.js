var sharePizza = cutPizzaSlices(8);

function cutPizzaSlices(numberOfSlices) {
function calculateNumberOfSlicesPerPerson(numberOfPeople) {
return `Each person gets ${numberOfSlices / numberOfPeople} pieces of pizza`
}
return calculateNumberOfSlicesPerPerson;
}

console.log(sharePizza(2));
console.log(sharePizza(3));