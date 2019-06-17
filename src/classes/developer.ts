import {Title} from '../enums';
import Person from './person';

export default class Developer extends Person {
    constructor(name: string, age: number, public title: Title = Title.Junior, private _salary: number) {
        super(name, age);
    }

    greeting(): void {
        console.log(`Hello, ${this.title}!`);
    }

    get salary(): number {
        return this._salary / 2;
    }
}
