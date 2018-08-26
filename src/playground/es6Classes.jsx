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

class Student extends Person{
    constructor(major='Computer Science'){
        super();
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }
}

const me = new Student('Andrew',26,'Computer');
const other = new Student();

console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(other);
console.log(me.hasMajor());
console.log(other.hasMajor());