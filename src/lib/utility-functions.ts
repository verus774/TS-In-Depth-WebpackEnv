import {Book, LibMgrCallback} from '../intefaces';
import {Category} from '../enums';

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.splice(2, inventory.length);
}

export function getAllBooks(): Book[] {
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

export function logFirstAvailable(books = getAllBooks()): void {
    const numberOfBooks: number = books.length;
    let firstAvailableTitle: string = '';

    for (const book of books) {
        if (book.available) {
            firstAvailableTitle = book.title;
            break;
        }
    }

    console.log(`Total books: ${numberOfBooks}`);
    console.log(`First available title: ${firstAvailableTitle}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    const titles: string[] = [];

    for (const book of books) {
        if (book.category === category) {
            titles.push(book.title);
        }
    }

    return titles;
}

export function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

export function getBookByID(id: number): Book | undefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function createCustomerID(name: string, id: number): string {
    return `${name}${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }

    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    const titles: string[] = [];

    for (const id of bookIDs) {
        const book = getBookByID(id);
        if (book.available) {
            titles.push(book.title);
        }
    }
    return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(bookProp: any): string[] {
    const books = getAllBooks();

    if (typeof bookProp === 'string') {
        return books
            .filter(book => book.author === bookProp)
            .map(book => book.title);
    } else if (typeof bookProp === 'boolean') {
        return books
            .filter(book => book.available === bookProp)
            .map(book => book.title);
    }
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const titles: string[] = getBookTitlesByCategory();
            if(titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found.');
            }
        } catch (e) {
            callback(e, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if(err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const p:Promise<string[]> = new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles: string[] = getBookTitlesByCategory(category);
            if(titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });

    return p;
}
