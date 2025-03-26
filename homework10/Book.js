class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }
  
  get title() {
    return this._title
  } set title(value) {
    if (value === "") {
      console.log("Пусте значення  назві")
    }
    this._title = value
  }

  get author() {
    return this._title
  } set author(value) {
    if (value === "") {
      console.log("Пусте значення у автора")
    }
    this._author = value
  }

  get year() {
    return this._title
  } set year(value) {
    if (value === "") {
      console.log("Пусте значення у року видання")
    }
    this._year = value
  }

  printInfo() {
    console.log(`Назва книги - ${this._title}, її автор ${this._author}, рік відання ${this._year} `)
  }
    static lookforbook(books) {
      return books.reduce((old, book) => (book._year < old._year ? book : old))
  }
}

module.exports = Book


