import { Person } from './person';


// can export function as well
export function promote() { };

// default export -> import ...   from '';
// named   export -> import {...} from '';

// default mains it is main thing or the defualt thing to export
export default class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log("teach");
    }
}
