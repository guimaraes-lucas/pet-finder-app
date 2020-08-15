import { Component, OnInit } from '@angular/core'

import { Pet } from './shared/pet.model'
import { PetService } from './shared/pet.service'

@Component({
  selector: 'pets',
  templateUrl: './pets.component.html'
})

export class PetsComponent implements OnInit{
  public pets: Array<Pet>
  public newPet: Pet

  public constructor(private petService: PetService){ 
    this.newPet = new Pet()
   }

  public ngOnInit(){
    this.petService.getAll()
      .subscribe(
        pets => this.pets = pets),
        error => alert("Ocorreu um erro no servidor, tente mais tarde.")
  }  

  public createPet() {
    this.newPet.name = this.newPet.name.trim()

    if(!this.newPet.name){
      alert("O pet deve ter um nome")
    }else{
      this.petService.create(this.newPet)
      .subscribe(
        (pet) => {
          this.pets.push(pet)
          this.newPet = new Pet()
        },
        () => alert("Ocorreu um erro no servidor, tente mais tarde.")
      )
    }
  }

  public deletePet(pet: Pet){
    if (confirm(`Deseja realmente excluir o pet "${pet.name}"`)) {
      this.petService.delete(pet.id)
      .subscribe(
        () => this.pets = this.pets.filter(p => p !== pet),
        () => alert("Ocorreu um erro no servidor, tente mais tarde.")
      )
    }
  }
}