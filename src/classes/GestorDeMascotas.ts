import { Pet } from './Mascotas'

export class PetManager {
    private pets: Array<Pet> = []

    addPet(Pet:Pet) {
        this.pets.push(Pet)
    }

    getPets(): Array<Pet> {
        return this.pets
    }

    getOnePet(nombre:string):Pet {
        console.log(this.pets.filter(pets => pets.getPets().name === nombre)[0])
        return this.pets.filter(pets => pets.getPets().name === nombre)[0]
    }
    
    fedPet(mascota:Pet) {
        return mascota.feedPet()
    }

    petPlay(mascota:Pet) {
        return mascota.petPlay()
    }

    petCare(mascota:Pet){
        return mascota.petCare()
    }
}


 const mascota1 = new Pet({
    name:'Marley',
    life:100,
    breed:'Calle con vereda',
    cared:'cuidado',
    happiness:100,
    hunger:100
 })

 const mascotList = new PetManager()
 mascotList.addPet(mascota1)
 console.log(mascotList.getPets())
 mascotList.petPlay(mascota1)
 console.log('------------------------------------------------------------------')
 mascotList.petCare(mascota1)
 console.log('------------------------------------------------------------------')
 mascotList.fedPet(mascota1)
 mascotList.petPlay(mascota1)
 mascotList.petPlay(mascota1)
 mascotList.petPlay(mascota1)
 mascotList.petPlay(mascota1)
 console.log(mascotList.getPets())
 mascotList.petCare(mascota1)
 mascotList.petCare(mascota1)
 mascotList.getOnePet('Marley')