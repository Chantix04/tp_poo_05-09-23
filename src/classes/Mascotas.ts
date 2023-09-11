/* eslint-disable no-unused-expressions */
interface Mascots {

    name:string
    happiness:number
    breed:string
    hunger:number
    life:number
    cared: string | boolean // Lo puse como string o booleano porque el valor por defecto para true será 'cuidado' y todo valor que no sea ese va a ser tomado como false o 'descuidado'

}

export class Pet {
  readonly name:string = '' // el nombre lo colocamos como de sólo lectura para que no se pueda editar desde fuera, pero que se pueda utilizar para buscar por nombre con el getter
  private happiness:number = 100
  private breed:string = ''
  private hunger: number = 100
  private life: number = 100
  private cared: string | boolean = 'cuidado'
  constructor (
    { name, happiness, breed, hunger, life, cared } :
        {name:string, happiness:number, breed: string, hunger:number, life:number, cared:string}
  ) {
    this.name = name
    this.happiness = happiness
    this.breed = breed
    this.hunger = hunger
    this.life = life
    this.cared = cared.toLocaleLowerCase() === 'cuidado'
  }

  getPets ():Mascots {
    // Getter que nos trae todas las mascotas creadas
    return {
      name: this.name,
      happiness: this.happiness,
      breed: this.breed,
      hunger: this.hunger,
      life: this.life,
      cared: this.cared
    }
  }

  petCare (): string {
    // Setter que verifica si la mascota está bien cuidada o no y actualiza la clave a 'cuidado' o 'descuidado' según si cumple o no
    if (this.happiness < 40 || this.hunger < 60) {
      this.petLifeReducer()
      this.cared = 'Descuidado'
      console.log(`Tu mascota ${this.name} está descuidado/a`)
      return `Tu mascota ${this.name} está descuidado/a`
    }
    this.cared = 'cuidado'
    console.log(`Tu mascota ${this.name} está bien cuidado/a. Sigue así!`)
    return `Tu mascota ${this.name} está bien cuidado/a. Sigue así!`
  }

  feedPet ():number | string {
    // Setter que funciona para actualizar el estado de hambre (hunger) de la mascota. Un número bajo significa que la mascota tiene hambre, por eso lo sumo

    // Si la mascota tiene 100 o más de nivel de hunger, su felicidad aumentará en 5 y su hunger en 20. Si su vida es menor o igual a 95, se curará 5.
    if (this.hunger >= 100) {
      if (this.life <= 95) { this.life += 5 }
      this.happiness += 5
      this.hunger += 20
      console.log(`Alimentaste a ${this.name}. Ahora su nivel de hambre es: ${this.hunger} y recuperó 5 de vida, ahora tiene ${this.life} HP`)
      return `Alimentaste a ${this.name}. Ahora su nivel de hambre es: ${this.hunger} y recuperó 5 de vida, ahora tiene ${this.life} HP`
    }

    // Si la mascota tiene menos de 60 de hunger, perderá 5 de vida pero recuperará 20 de hunger
    if (this.hunger < 60) {
      this.petLifeReducer()
      this.hunger += 20
      console.log(`Alimentaste a ${this.name}. Ahora su nivel de hambre es de: ${this.hunger}.`)
      return `Alimentaste a ${this.name}. Ahora su nivel de hambre es de: ${this.hunger}.`
    }

    // Si la mascota tiene 150 o más de nivel de hambre, no podrás alimentarla.
    if (this.hunger >= 150) {
      console.log(`No puedes alimentar a ${this.name} porque está lleno/a. Hazlo/a jugar un poco`)
      return `No puedes alimentar a ${this.name} porque está lleno/a. Hazlo/a jugar un poco`
    }

    // Esta es la acción por defecto de la función de alimentar. Simplemente suma 20 puntos a hunger.
    this.hunger += 20
    console.log(`Alimentaste a ${this.name}. Ahora su nivel de hambre es de: ${this.hunger}`)
    return `Alimentaste a ${this.name}. Ahora su nivel de hambre es de: ${this.hunger}`
  }

  petPlay ():number | string {
    // Este método sirve para jugar con la mascota. Si el nivel de hambre está por debajo de 60, no va a querer jugar, perderá 5 de vida y 20 de felicidad
    if (this.hunger < 60) {
      this.petLifeReducer()
      console.log(`${this.name} no quiere jugar porque tiene hambre. Aliméntalo/a`)
      return `${this.name} no quiere jugar porque tiene hambre. Aliméntalo/a`
    }

    // Este es el camino por defecto, la mascota jugará y su hunger bajará 20 puntos pero aumentará su felicidad en 10
    this.hunger -= 20
    this.happiness += 10
    console.log(`Jugaste con ${this.name}. Ahora está más alegre!`)
    return `Jugaste con ${this.name}. Ahora está más alegre!`
  }

  private petLifeReducer () {
    // Este método lo creé para no repetir el condicional de quitarle vida a la mascota. La idea es que si la mascota tiene menos de 10 de vida ya no se le quite más para que no muera.
    // Además incluí la parte de quitarle felicidad a la mascota ya que siempre que pierde vida también baja su felicidad.
    if (this.life >= 10) { this.life -= 5 }
    this.happiness -= 20
  }
}
