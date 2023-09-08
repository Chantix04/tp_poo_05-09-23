interface Mascots {

    name:string
    happiness:number
    breed:string
    hunger:number
    life:number
    cared: string | boolean

}

export class Pet {
    readonly name:string = ''
    private happiness:number = 100
    private breed:string = ''
    private hunger: number = 100
    private life: number = 100
    private cared: string | boolean = ''
    constructor (
        {name, happiness, breed, hunger, life, cared } : 
        {name:string, happiness:number, breed: string, hunger:number, life:number, cared:string}
        ) {
            this.name = name,
            this.happiness = happiness,
            this.breed = breed,
            this.hunger = hunger,
            this.life = life,
            this.cared = cared.toLocaleLowerCase() === 'cuidado'
    }
    getPets():Mascots {
        return {
            name: this.name,
            happiness: this.happiness,
            breed: this.breed,
            hunger: this.hunger,
            life: this.life,
            cared: this.cared
        }
    }

    petCare(): string {
        
        if(this.happiness<40 || this.hunger<60){
            this.petLifeReducer()
            this.cared = 'Descuidado'
            console.log(`Tu mascota ${this.name} está descuidado/a`)
            return `Tu mascota ${this.name} está descuidado/a`
        }
        this.cared = 'cuidado'
        console.log(`Tu mascota ${this.name} está bien cuidado/a. Sigue así!`)
        return `Tu mascota ${this.name} está bien cuidado/a. Sigue así!`
    }

    feedPet():number | string {
       
        if(this.hunger >= 100){
           if (this.life <=95){ this.life += 5}
            this.happiness += 5
            this.hunger += 20
            console.log(`Alimentaste a ${this.name}. Ahora su nivel de hambre es: ${this.hunger}`)
            return `Alimentaste a ${this.name}. Ahora su nivel de hambre es: ${this.hunger}`
        }

        if(this.hunger < 60){
            this.petLifeReducer()
            this.hunger += 20
            console.log(`Alimentaste a ${this.name}. Ahora su nivel de hambre es de: ${this.hunger}.`)
            return `Alimentaste a ${this.name}. Ahora su nivel de hambre es de: ${this.hunger}.`
        }
        
        if (this.hunger >= 150){
            console.log(`No puedes alimentar a ${this.name} porque está lleno/a. Hazlo/a jugar un poco`)
            return `No puedes alimentar a ${this.name} porque está lleno/a. Hazlo/a jugar un poco`
        }

        this.hunger += 20
        console.log(`Alimentaste a ${this.name}. Ahora su nivel de hambre es de: ${this.hunger}`)
        return `Alimentaste a ${this.name}. Ahora su nivel de hambre es de: ${this.hunger}`
       
    }

    petPlay():number | string {
        
        if (this.hunger<60){
            this.petLifeReducer()
            console.log(`${this.name} no quiere jugar porque tiene hambre. Aliméntalo/a`)
            return `${this.name} no quiere jugar porque tiene hambre. Aliméntalo/a`
        }
        
        this.hunger -= 20
        this.happiness += 10
        console.log(`Jugaste con ${this.name}. Ahora está más alegre!`)
        return `Jugaste con ${this.name}. Ahora está más alegre!`
    }

    private petLifeReducer() {
        if (this.life >= 10){ this.life -= 5} 
        this.happiness -= 20
    }
}