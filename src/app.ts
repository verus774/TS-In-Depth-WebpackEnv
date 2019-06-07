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

function logFirstAvailable(books: any[]): void {
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

function getBookTitlesByCategory(category: Category): string[] {
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

function getBookByID(id: number): object {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

// =============================================================

// Task #1
logFirstAvailable(getAllBooks());

// Task #2
logBookTitles((getBookTitlesByCategory(Category.JavaScript)));

// Task #3
// const titles = getBookTitlesByCategory(Category.JavaScript);
// titles.forEach(title => console.log(title));

const book = getBookByID(2)
console.log(book);
