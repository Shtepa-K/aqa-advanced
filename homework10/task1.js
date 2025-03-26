const Book = require('./Book')

const book1 = new Book("В поисках утраченного времени", "Марсель Пруст", 2006)
const book2 = new Book("Маленькие женщины", "Луиза Мэй Олкотт", 1989)
const book3 = new Book("Игры, в которые играют люди", "Эрик Берн", 2010)

book1.title = ""
book2.author = ""
book2.year = 900
//console.log(book1.title)


const EBook = require('./EBook')

const ebook1 = new EBook("В поисках утраченного времени", "Марсель Пруст", 2015, ".pdf")
const ebook2 = new EBook("Маленькие женщины", "Луиза Мэй Олкотт", 2003, ".doc")
const ebook3 = new EBook("Игры, в которые играют люди", "Эрик Берн", 2018, ".doc")

ebook2.type = ""


book1.printInfo()
book2.printInfo()
book3.printInfo()

ebook1.printInfo()
ebook2.printInfo()
ebook3.printInfo()

let books = Book.lookforbook([book1, book2, book3, ebook1, ebook2, ebook3]) 
//books.printInfo()
console.log(books)

let ebooks = EBook.newbook(book1, "doc" ) 
console.log(ebooks)



