import {Category} from './enums';
import {getBooksByCategory, logCategorySearch} from './lib/utility-functions';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
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
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
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

// Task #10, 22
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'name';
// favoriteLibrarian.assistCustomer('customer');
// Task #22
// favoriteLibrarian.printLibrarian();

// Task #11
// const ref = new ReferenceItem('Title', 2019);
// ref.printItem();
// ref.publisher = 'Ann';
// console.log(ref.publisher);

// Task #12
// const ref = new Encyclopedia('Title', 2019, 10);
// ref.printItem();

// Task #13
// const ref = new Encyclopedia('Title', 2019, 10);
// ref.printCitation();

// Task #16
/*const ref = new RefBook('Title', 2019, 10);
ref.printItem();
ref.printCitation();*/

// Task #18
/*const inventory: Array<Book> = [
    {id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software},
    {id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software},
    {id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software},
    {id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software}
];*/
// console.log(purge<Book>(inventory));
// console.log(purge<number>([1, 2, 3, 4]));

// Task #19
// const bookShelf:Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst());

/*
const magazines: Array<Magazine> = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
console.log(magazineShelf.getFirst());
*/

// Task #20
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// Task #21
// const favoriteLibrarian: Librarian = new UniversityLibrarian();

// Task #23
// const favoriteLibrarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'name';
// favoriteLibrarian.assistFaculty = () => console.log('changed 1');
// favoriteLibrarian.assistFaculty();
// favoriteLibrarian.teachCommunity = () => console.log('changed 2');
// favoriteLibrarian.teachCommunity();

// Task #24
// const ref = new RefBook('Title', 2019, 10);
// ref.printItem();

// Task #25, 26
// const favoriteLibrarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'name';
// favoriteLibrarian.assistCustomer('Boris');

// Task #27
// const refBook = new RefBook('Title', 2019, 10);
// refBook.copies = 5;
// refBook.copies = -10;
// console.log(refBook);

// Task #28
getBooksByCategory(Category.JavaScript, logCategorySearch);
