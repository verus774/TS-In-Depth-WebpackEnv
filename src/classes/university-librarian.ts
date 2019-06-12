import * as Interfaces from '../intefaces';
import {logger, logMethod, logParameter, sealed, writable} from '../decorators';

@logger
@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Interfaces.Librarian {
    department: string;
    email: string;
    name: string;

    @logMethod
    assistCustomer(@logParameter custName: string) {
        console.log(`${this.name} is assisting ${custName}`);
    }

    @writable(true)
    assistFaculty() {
        console.log('Assisting faculty');
    }

    @writable(false)
    teachCommunity() {
        console.log('Teaching community');
    }
}
