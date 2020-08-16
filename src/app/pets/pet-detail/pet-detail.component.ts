import { ActivatedRoute, Params } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { switchMap } from 'rxjs/operators'
import { Location } from '@angular/common'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { Pet } from '../shared/pet.model'
import { Kind } from 'src/app/kinds/shared/kind.model'

import { PetService } from '../shared/pet.service'
import { KindService } from 'src/app/kinds/shared/kind.service'

@Component({
  selector: 'pet-detail',
  templateUrl: './pet-detail.component.html'
})

export class PetDetailComponent implements OnInit{
  public reactivePetForm: FormGroup
  public pet: Pet
  public kindOptions: Kind[]

  public constructor(
    private petService: PetService,
    private kindService: KindService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ){
    this.reactivePetForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
      race: [null, [Validators.required]],
      age: [null, Validators.required],
      weight: [null, [Validators.required]],
      city: [null, [Validators.required]],
      kindId: [null, Validators.required],
      userId: [null, Validators.required]
    })
  }

  public ngOnInit(){
    this.kindService.getAll()
      .subscribe(
        kinds => this.kindOptions = kinds),
        error => alert("Ocorreu um erro no servidor, tente mais tarde.")

    this.route.params
      .pipe(switchMap((params: Params) => this.petService.getById(+params['id'])))
      .subscribe(
        pet => this.setPet(pet),
        error => alert("Ocorreu um erro no servidor, tente mais tarde.")
      )
  }
  
  public setPet(pet: Pet): void {
    this.pet = pet
    this.reactivePetForm.patchValue(this.pet)
  }

  public goBack(){
    this.location.back()
  }

  public updatePet(){
    this.pet.name = this.reactivePetForm.get('name').value
    this.pet.race = this.reactivePetForm.get('race').value
    this.pet.age = this.reactivePetForm.get('age').value
    this.pet.weight = this.reactivePetForm.get('weight').value
    this.pet.city = this.reactivePetForm.get('city').value
    this.pet.kindId = this.reactivePetForm.get('kindId').value
    this.pet.userId = this.reactivePetForm.get('userId').value

    this.petService.update(this.pet)
    .subscribe(
      () => alert('Pet atualizado com sucesso!'),
      () => alert("Ocorreu um erro no servidor, tente mais tarde.")
    )
  }

  // form errors methods
  public fieldClassForErrorOrSuccess(fieldName: string){
    return {
      "has-error": this.showFieldError(fieldName),
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