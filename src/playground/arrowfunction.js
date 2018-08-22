const fullName = 'James Bond';

//Arrow functions
const getFirstName = (fullName) => console.log(fullName.split(' ')[0]);
getFirstName(fullName);

//Arrow functions2

const user = {
    name: 'James',
    cities: ['Sydney', 'Melbounrne', 'Perth'],
    //In method arrow function will not work, use the below function type
    //Es6 definition syntax
    printPlacesLived() {
        // In map transform each item
        return this.cities.map((city) => this.name + ' has lived in' + city);
    },
    places(){
        // //Doing some thing with array
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in'+city);
        });
    }
};

console.log(user.printPlacesLived());
console.log(user.places());

const multiplier = {
    numbers: ['10', '20', '30'],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((num) => (this.multiplyBy * num));
    }
};

console.log(multiplier.multiply());
