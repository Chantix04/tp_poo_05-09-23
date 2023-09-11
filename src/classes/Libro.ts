/* eslint-disable no-unused-expressions */
interface librito {
    id:number
    title:string
    author:string
    taken: string | boolean
}

export class Book {
  private id: number = 0
  private title: string = ''
  private author: string = ''
  private taken: string | boolean = ''
  private idEdited : boolean = false
  constructor (
    { title, author, taken }:
    { title:string, author:string, taken: string }
  ) {
    this.title = title
    this.author = author
    this.taken = taken.toLocaleLowerCase() === 'disponible'
  }

  getBook (): librito {
    return {
      id: this.id,
      author: this.author,
      title: this.title,
      taken: this.taken
    }
  }

  getDisponible () {
    return this.taken
  }

  setAvailability (): string {
    this.taken = !this.taken
    return this.taken ? 'disponible' : 'prestado'
  }

  setId (id:number) {
    if (!this.idEdited) {
      this.id = id
      this.idEdited = true
      return 'Id editado correctamente'
    }
    return 'No se puede editar este Id'
  }
}
