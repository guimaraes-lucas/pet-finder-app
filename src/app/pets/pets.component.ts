import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { Pet } from './shared/pet.model'
import { Kind } from 'src/app/kinds/shared/kind.model'

import { PetService } from './shared/pet.service'
import { KindService } from 'src/app/kinds/shared/kind.service'

import { PET_VALIDATION } from './shared/pet.validation'
import { FormUtils } from 'src/app/shared/form.utils'

@Component({
  selector: 'pets',
  templateUrl: './pets.component.html'
})

export class PetsComponent implements OnInit{
  public form: FormGroup
  public kindOptions: Kind[]
  public pets: Array<Pet>
  public newPet: Pet
  public formUtils: FormUtils

  public constructor(
    private petService: PetService,
    private kindService: KindService,
    private formBuilder: FormBuilder
  ){ 
    this.newPet = new Pet()
    this.form = this.formBuilder.group(PET_VALIDATION)
    this.setPet(this.newPet)
    this.formUtils = new FormUtils(this.form)
   }

  public ngOnInit(){
    this.kindService.getAll()
      .subscribe(
        kinds => this.kindOptions = kinds),
        error => alert("Ocorreu um erro no servidor, tente mais tarde.")

    this.petService.getAll()
      .subscribe(
        pets => this.pets = pets),
        error => alert("Ocorreu um erro no servidor, tente mais tarde.")
  }  

  public setPet(pet: Pet): void {
    this.form.patchValue(pet)
  }

  public createPet() {
    this.newPet.name = this.form.get('name').value
    this.newPet.race = this.form.get('race').value
    this.newPet.age = this.form.get('age').value
    this.newPet.weight = this.form.get('weight').value
    this.newPet.city = this.form.get('city').value
    this.newPet.kindId = this.form.get('kindId').value
    this.newPet.userId = this.form.get('userId').value

    this.petService.create(this.newPet)
    .subscribe(
      (pet) => {
        this.pets.push(pet)
        this.newPet = new Pet()
      },
      () => alert("Ocorreu um erro no servidor, tente mais tarde.")
    )
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