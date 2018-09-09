class Person {
    constructor(name = 'Anonymous', age = 27) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        //String template to use like `hi ${value}`
        return `Hi i am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year old`
    }
}

class Student extends Person {
    constructor(name,age,major = 'Computer Science') {
        super(name,age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += `Their major is ${this.major}`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name,age,homeLocation = 'Perth') {
        super(name,age);
        this.homeLocation = homeLocation;
    }

    getGreetings() {
        let greetings = super.getGreeting();
        if (this.homeLocation) {
            greetings = `I am visiting from ${this.homeLocation}`
        }
        return greetings;
    }

}

const me = new Student('Andrew', 26, 'Computer');
const other = new Student();
const otherNew = new Traveler();


console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(other);
console.log(me.hasMajor());
console.log(other.hasMajor());
console.log(otherNew.getGreetings());
