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

function getAllBooks(): any[] {
    let books: Array<object> = [
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

function logFirstAvailable(books: any[] = getAllBooks()): void {
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

function getBookByID(id: number): any {
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
