import * as Interfaces from './intefaces';


class UniversityLibrarian implements Interfaces.Librarian {
    department: string;
    email: string;
    name: string;

    assistCustomer(custName: string) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

abstract class ReferenceItem {
    // title: string;
    // year: number;

    /*constructor(newTitle: string, newYear: number) {
        console.log('Creating a new ReferenceItem...');

        this.title = newTitle;
        this.year = newYear;
    }*/

    private _publisher: string;

    static department: string = 'Fiction';

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
    }

    abstract printCitation();
}


export {UniversityLibrarian, ReferenceItem}
