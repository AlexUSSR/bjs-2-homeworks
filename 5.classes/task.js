'use strict'

// Задание 1

class PrintEditionItem {

  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }

  fix = function() {
	this.state *= 1.5
  }

  set state(state) {
    if ( state < 0) {
  	  this._state = 0;
  	} else if ( state > 100){
      this._state = 100;
  	} else {
  	  this._state = state;
  	}
  }
  get state() {
  	return this._state;
  }
}
 
const sherlock1 = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock1.releaseDate); //2019
console.log(sherlock1.state); //100
sherlock1.fix();
console.log(sherlock1.state); //100


class Magazine extends PrintEditionItem {
  constructor() {
  	super(name);
  	this.name = name;
  	this.type = "magazine";
  }
}


class Book extends PrintEditionItem {
  constructor(author) {
    super(name, author);
  	this.name = name;
  	this.author = author;
  	this.type = "book";
  }
}


class NovelBook extends Book {
  constructor(author) {
  	super(author);
    this.type = "novel";
  }
}


class FantasticBook extends Book {
  constructor(author) {
  	super(author);
  	this.type = "fantastic";
  }
}


class DetectiveBook extends Book {
  constructor(author) {
  	super(author);
    this.type = "detective";
  }
}


const picknick1 = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick1.author); //"Аркадий и Борис Стругацкие"
picknick1.state = 10;
console.log(picknick1.state); //10
picknick1.fix();
console.log(picknick1.state); //15


// Задание 2

class Library {
  constructor(name, books, state) {
  	this.name = name;
  	this.books = [];
  	this.state = state;
  }

  addBook(book) {
  	this.book = book;

  	if ( this.state > 30) {
  		this.books += this.book;
  	} return this.books;
  }                                 //  до сих пор Jasmin дает зеленый свет

  findBookBy(type, value) {         //  начиная с этого метода не понимаю ошибки
  	this.type = type;
  	this.value = value;

  	if ( this.value = true) return this.book;
  }

  giveBookByName(bookName) {
  	this.bookName = bookName;
  	if ( this.bookName = true) {
  	  delete this.bookName;          // с выдачей и возвратом книг вообще не понял 
  	} return this.bookName;

    if ( this.bookName = false) return null;
  } 
}
  
  











