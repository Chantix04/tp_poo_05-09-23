interface librito {
    id:number
    title:string
    author:string
    taken: string | boolean
}

export class Book {
    private id: number = 0
    private title: string = ''
    private author: string =''
    private taken: string | boolean = ''

    constructor ({ id, title, author, taken }:{ id:number, title:string, author:string, taken: string }) {
        this.id = id,
        this.title = title,
        this.author = author,
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

    setDisponibility (): string {
        this.taken = !this.taken
        return this.taken ? 'disponible' : 'prestado'
    }
}