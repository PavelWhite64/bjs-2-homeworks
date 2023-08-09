class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
       this.state *= 1.5;
    }

    set state(num){
        if(num < 0){
            this._state = 0;
        } else if(num > 100){
            this._state = 100;
        } else {
            this._state = num;
        }
    }

    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount,);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}
/*
--------------2 Задача------------------------------------------------------------------------------------
*/
class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if(book.state > 30) {
            return this.books.push(book);
        }
    }

    findBookBy(type, value){
        let findBook = this.books.find(book => book[type] === value);
        if (typeof findBook === "object") {
            return findBook;
        } else {
            return null;
        }
    }

    giveBookByName(bookName){
        let giveBook = this.books.find(book => book.name === bookName);
        if(typeof giveBook === "object") {
            let i = this.books.indexOf(giveBook);
            this.books.splice(i, 1);
            return giveBook;
        } else {
            return null;
        }
    }
}