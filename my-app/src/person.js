export class Person {
    walk() {
        // return the reference to the current object
        console.log(this);
    }

    // reserved word constructor
    constructor(name) {
        this.name = name;
    }
}
