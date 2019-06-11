import * as Interfaces from '../intefaces';
import {sealed} from '../decorators';

@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Interfaces.Librarian {
    department: string;
    email: string;
    name: string;

    assistCustomer(custName: string) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}
