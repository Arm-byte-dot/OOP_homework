class Library {
  constructor() {
    this.books = []
  }
  addBook(title) {
    this.books.push(title)
  }
  showBooks() {
    console.log(this.books.join(', '))
  }
}
let lib = new Library()
lib.addBook("1984")
lib.addBook("Harry Potter")
lib.addBook("The Hobbit")
lib.showBooks()