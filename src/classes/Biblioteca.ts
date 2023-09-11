import { Book } from './Libro'

export class Library {
  private books: Array<Book> = []

  generarId () {
    const ids = this.books.map(e => e.getBook().id)

    if (!ids.length) {
      ids.push(0)
    }

    return Math.max(...ids) + 1
  }

  addBook (book:Book) {
    this.books.push(book)
  }

  getBooks (): Array<Book> {
    return this.books
  }

  getBooksNotTaken (): Array<Book> {
    return this.books.filter(books => books.getDisponible())
  }

  getBooksTaken (): Array<Book> {
    return this.books.filter(books => !books.getDisponible())
  }

  changeBookAvailability (id:number): string {
    return this.books
      .filter(books => books.getBook().id === id)[0]
      .setAvailability()
  }
}

const libreria = new Library()

const libro1: Book = {
  id: libreria.generarId(),
  title: 'libro1',
  author: 'Chanti',
  taken: 'disponible'
}

libreria.generarId()

libreria.addBook(libro1)
