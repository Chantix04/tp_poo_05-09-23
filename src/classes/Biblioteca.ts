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

const libro1 = new Book({
  id: libreria.generarId(),
  title: 'libro1',
  author: 'Chanti',
  taken: 'disponible'
})

const libro2 = new Book({
  id: libreria.generarId(),
  title: 'libro2',
  author: 'Chanti',
  taken: 'disponible'
})

libreria.addBook(libro1)
libreria.addBook(libro2)
console.log(libreria.getBooks())
console.log('-------------------------------------------------------------------------')
libreria.changeBookAvailability(libro2.getBook().id)
console.log('-------------------------------------------------------------------------')
console.log(libreria.getBooksTaken())
console.log('-------------------------------------------------------------------------')
console.log(libreria.getBooksNotTaken())
console.log('-------------------------------------------------------------------------')
