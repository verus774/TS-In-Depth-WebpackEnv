import {Category} from './enums';


interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface DamageLogger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person{
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    name: string;
    assistCustomer: (custName: string) => void;
    printLibrarian?: () => void;
}

interface Magazine {
    title: string;
    publisher : string;
}

interface ShelfItem {
    title: string;
}

interface LibMgrCallback {
    (err: Error, titles: string[]): void;
}

interface IPerson {
    name: string;
    age: number;
    greeting: (prefix: string) => void;
}

export {Book, DamageLogger as Logger, Author, Librarian, Magazine, ShelfItem, LibMgrCallback, IPerson};
