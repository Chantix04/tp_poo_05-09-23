import { Pet } from './Mascotas'

export class PetManager {
    private pets: Array<Pet> = []

    addPet(Pet:Pet) {
        this.pets.push(Pet)
    }

    getPets(): Array<Pet> {
        return this.pets
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
 
 console.log(mascotList.getPets())

 console.log('------------------------------------------------------------------')
 mascotList.petCare(mascota1)
