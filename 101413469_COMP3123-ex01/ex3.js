function right(str) {
    if (str.lengt < 3) {
        return str;
    }
    let lastThree = str.slice(-3);
    let otherThree = str.slice(0, -3);

    return lastThree + otherThree;
}
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));
