const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {

        return this.cities.map((city) => this.name + ' has lived in ' + city);
        }
    };

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((num) => this.multiplyBy * num);
    }
}

console.log(multiplier.multiply());