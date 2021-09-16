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


class Magazine extends PrintEditionItem {    // я не понимаю в чем проблема. Действую согласно презентации.
  constructor() {                            // extends это ведь и есть команда наследования?
  	super(name);                             // при этом конструктор Журнала наследует конструктор "родителя"
  	this.name = name;                        // и добавляет свои новые аргументы. Или не так?
  	this.type = "magazine";                  // почему Жасмин и консоль не выдают ошибок?
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
  constructor(name, books) {
  	this.name = name;
  	this.books = [];
  }

  addBook(book, state) {
  	this.book = book;
  	this.state = state;

  	if ( this.state > 30) {
  	  this.books += this.book;
  	  console.log([] + {});                    // я так и не понял: это объект влаживаем в массив?
  	} return this.books;
  }                                            //  до сих пор Jasmin дает зеленый свет

  findBookBy(type, value) {               //  начиная с этого метода не понимаю: 
  	let myBook;                           // 1. зачем здесь type , value если создаю переменную?
  	  myBook[type];                       // 2. переменная такая или иная?
  	  myBook[author];                     // 3. что вводить в значение?
  	  myBook[nameBook];
  	  myBook[year];
  	  myBook[pages];

    for ( let i = 0; i < myBook.lenght; i++) {
      if ( myBook[i] == true)
      return myBook[i];
    } if ( myBook[i] = false) return null;
  }


  giveBookByName(bookName) {
  	
  	for ( let i = 0; i < bookName.lenght; i++) {
  	  if (bookName[i] == true) {
  	    delete bookName[i](this.books);     // правильно ли так удалить книгу из хранилища?
  	    return bookName[i];
  	  } else return null;
  	}
  } 
}
  