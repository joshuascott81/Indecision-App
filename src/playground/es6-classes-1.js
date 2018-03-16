

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `I'm ${this.name}, hello!;`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let message = super.getGreeting();
        if(this.hasHomeLocation()) {
            message += ` I'm visiting from ${this.homeLocation}.`;
        }
        return message;
    }
}

const me = new Traveler('Joshua Scott', 36, 'San Marcos, Tx');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());