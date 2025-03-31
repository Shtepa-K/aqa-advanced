class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }
    printInfo(){
console.log(`Назва книги "${this.title}", її автор ${this.author}, рік відання ${this.year} `)
}
}
 
class EBook extends Book {
  constructor(title, author, year, type) {
      super(title, author, year)
      this.type = type
  }

get type() {
    return this._type
  }
  set type(value) {
    if (value === "") {
      console.error("Пусте значення  форматі")
      return
    }
    
    this._type = value
  }
    printInfo() {
    console.log(`Назва книги - ${this.title}, її автор ${this.author}, рік відання ${this.year}, формат книги ${this.type} `);
    }
  static newbook(Book, type) {
       return new EBook(Book._title, Book._author, Book._year, type)
   
  }
  
}

module.exports = EBook



