showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular,
}

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
}

class ReferenceItem {
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
}

class Encyclopedia extends ReferenceItem{
    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`);
    }
}


function getAllBooks(): Book[] {
    let books: Array<Book> = [
        {
            id: 1,
            title: "Refactoring JavaScript",
            author: "Evan Burchard",
            available: true,
            category: Category.JavaScript,
        },
        {
            id: 2,
            title: "JavaScript Testing",
            author: "Liang Yuxian Eugene",
            available: false,
            category: Category.JavaScript,
        },
        {
            id: 3,
            title: "CSS Secrets",
            author: "Lea Verou",
            available: true,
            category: Category.CSS,
        },
        {
            id: 4,
            title: "Mastering JavaScript Object-Oriented Programming",
            author: "Andrea Chiarelli",
            available: true,
            category: Category.JavaScript,
        }
    ];

    return books;
}

function logFirstAvailable(books = getAllBooks()): void {
    const numberOfBooks: number = books.length;
    let firstAvailableTitle: string = '';

    for (const book of books) {
        if(book.available) {
            firstAvailableTitle = book.title;
            break;
        }
    }

    console.log(`Total books: ${numberOfBooks}`);
    console.log(`First available title: ${firstAvailableTitle}`);
}

function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    const titles: string[] = [];

    for (const book of books) {
        if (book.category === category) {
            titles.push(book.title);
        }
    }

    return titles;
}

function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

function getBookByID(id: number): Book | undefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if(age) {
        console.log(`Customer age: ${age}`);
    }

    if(city) {
        console.log(`Customer city: ${city}`);
    }
}

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    const titles: string[] = [];

    for(const id of bookIDs) {
        const book = getBookByID(id);
        if (book.available) {
            titles.push(book.title);
        }
    }
    return titles;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookProp: any): string[] {
    const books = getAllBooks();

    if(typeof bookProp === 'string') {
        return books
            .filter(book => book.author === bookProp)
            .map(book => book.title);
    } else if(typeof bookProp === 'boolean') {
        return books
            .filter(book => book.available === bookProp)
            .map(book => book.title);
    }
}

function printBook(book: Book):void {
    console.log(`${book.title} by ${book.author}`);
}

// =============================================================

// Task #1
// logFirstAvailable(getAllBooks());

// Task #2
// logBookTitles((getBookTitlesByCategory(Category.JavaScript)));

// Task #3
// const titles = getBookTitlesByCategory(Category.JavaScript);
// titles.forEach(title => console.log(title));

// const book = getBookByID(2);
// console.log(book);

// Task #4
// let myId = createCustomerID('Ann', 10);
// console.log(myId);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${name}${id}`;
// idGenerator = (createCustomerID);
// myId = idGenerator('Ann', 100);
// console.log(myId);

// Task #5
// createCustomer('Ann');
// createCustomer('Boris', 30);
// createCustomer('Clara', 32, 'Gomel');
// createCustomer('Clara', undefined, 'Gomel');

// console.log(getBookTitlesByCategory());
// console.log(getAllBooks());

// console.log(checkoutBooks('Ann'));
// console.log(checkoutBooks('Ann', 1));

// Task #6
// console.log(getTitles(false));

// Task #7
// printBook(getBookByID(1));

/*const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
};*/
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task #8
// const logDamage: DamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task #9
/*const favoriteAuthor: Author = {
    email: 'aaa@cc.com',
    name: 'Ann',
    numBooksPublished: 2,
};

const favoriteLibrarian: Librarian = {
    email: 'aaa@cc.com',
    name: 'Ann',
    department: 'Classical literature',
    assistCustomer: (custName: string) => console.log(custName)
};*/

// Task #11
// const ref = new ReferenceItem('Title', 2019);
// ref.printItem();
// ref.publisher = 'Ann';
// console.log(ref.publisher);

// Task #12
// const ref = new Encyclopedia('Title', 2019, 10);
// ref.printItem();

