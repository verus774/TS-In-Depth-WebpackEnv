import {IPerson} from '../intefaces';

export default class Person implements IPerson {
    constructor(public name: string, public age: number) {
    }

    greeting(prefix: string = 'Mr'): void {
        console.log(`Hello, ${prefix} ${this.name}!`);
    }
}
