"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

const books = []

class Library {
  #books = 0;
  constructor(books) {
    this.#books = books;
  }
  get allBooks() {
    return this.#books;
  }
  hasBook(title, books) {
    for (var i = 0; i < books.length; i++) {
      if (arr[i] === title) {
        return true;
      }
      return false;
      }
    }
  addBook(title) {
    if (hasBook(title, books) === true) {
      console.error("Книга с таким названием уже существует в списке");
    }
    else {
      this.#books.push(title)
    }
  }
  removeBook(title) {
    if (hasBook(title, books) === true) {
      this.#books.delete(title);
    }
    else {
      console.error("Книги с таким названием нет в списке");
    }
  }
}

let booksArr = new Library();

booksArr.addBook("му-му");
booksArr.addBook("горке от ума");
booksArr.addBook("идиот");
booksArr.addBook("война и мир");
console.log(books);
booksArr.removeBook("идиот");
booksArr.removeBook("война и мир");
console.log(books);
console.log(booksArr.hasBook("идиот", books));
console.log(booksArr.hasBook("му-му", books));

