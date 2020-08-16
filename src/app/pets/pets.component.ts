import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { Pet, petValidations } from './shared/pet.model'
import { Kind } from 'src/app/kinds/shared/kind.model'

import { PetService } from './shared/pet.service'
import { KindService } from 'src/app/kinds/shared/kind.service'

@Component({
  selector: 'pets',
  templateUrl: './pets.component.html'
})

export class PetsComponent implements OnInit{
  public reactivePetForm: FormGroup
  public kindOptions: Kind[]
  public pets: Array<Pet>
  public newPet: Pet

  public constructor(
    private petService: PetService,
    private kindService: KindService,
    private formBuilder: FormBuilder
  ){ 
    this.newPet = new Pet()
    this.reactivePetForm = this.formBuilder.group(petValidations)
    this.setPet(this.newPet)
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
    this.reactivePetForm.patchValue(pet)
  }

  public createPet() {
    this.newPet.name = this.reactivePetForm.get('name').value
    this.newPet.race = this.reactivePetForm.get('race').value
    this.newPet.age = this.reactivePetForm.get('age').value
    this.newPet.weight = this.reactivePetForm.get('weight').value
    this.newPet.city = this.reactivePetForm.get('city').value
    this.newPet.kindId = this.reactivePetForm.get('kindId').value
    this.newPet.userId = this.reactivePetForm.get('userId').value || 1

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

  // form errors methods
  public fieldClassForErrorOrSuccess(fieldName: string){
    return {
      "needs-validation": this.showFieldError(fieldName),
      "was-validated": this.getField(fieldName).valid
    }
  }

  public showFieldError(fieldName: string): boolean {
    let field = this.getField(fieldName)
    return field.invalid && ( field.touched || field.dirty )
  }

  public getField(fieldName: string){
    return this.reactivePetForm.get(fieldName)
  }
}