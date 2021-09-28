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
	this.state *= 1.5;
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
  'Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе',
  2019,
  1008
);

console.log(sherlock1.releaseDate); //2019
console.log(sherlock1.state); //100
sherlock1.fix();
console.log(sherlock1.state); //100


class Magazine extends PrintEditionItem {  
  constructor(name, releaseDate, pagesCount, state, type) {
  	super(name, releaseDate, pagesCount, state);				
  	this.type = 'magazine';
  }
}

const printItem = new Magazine('Forbes', 2020, 180, 70, 'magazine');

console.log('\"' + printItem.name + '\", ' + printItem.releaseDate + ' год, ' + 
	printItem.pagesCount + 'c., ' + printItem.type);



class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state);
  	this.author = author;
  	this.type = 'book';
  }
}

const printItem1 = new Book('Т. Шевченко', 'Кобзар', 1935, 357, 15, 'book')

console.log(printItem1.author + ', \"' + printItem1.name + '\", ' + printItem1.releaseDate + ' год, ' + 
	printItem1.pagesCount + 'c., ' + printItem1.type);


class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
  	super(author, name, releaseDate, pagesCount, state);
    this.type = 'novel';
  }
}

const printItem2 = new NovelBook('А. Сапковский', 'Меч Предназначения', 1992, 384, 30, 'novel');

console.log(printItem2.author + ', \"' + printItem2.name + '\", ' + printItem2.releaseDate + ' год, ' + 
	printItem2.pagesCount + 'c., ' + printItem2.type);

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
  	super(author, name, releaseDate, pagesCount, state);
  	this.type = 'fantastic';
  }
}

const printItem3 = new FantasticBook('Джон Толкин', 'Властелин колец', 1954, 2093, 60, 'fantastic');

console.log(printItem3.author + ', \"' + printItem3.name + '\", ' + printItem3.releaseDate + ' год, ' + 
	printItem3.pagesCount + 'c., ' + printItem3.type);

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
  	super(author, name, releaseDate, pagesCount, state);
    this.type = 'detective';
  }
}

const printItem4 = new DetectiveBook('Агата Кристи', 'Десять негритят', 2019, 256, 80, 'detective');

console.log(printItem4.author + ', \"' + printItem4.name + '\", ' + printItem4.releaseDate + ' год, ' + 
	printItem4.pagesCount + 'c., ' + printItem4.type);



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
  	} return this.books;
  }                                            //  до сих пор Jasmin дает зеленый свет

  findBookBy(type, value) {              


  	
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
  