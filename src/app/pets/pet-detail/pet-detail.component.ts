import { ActivatedRoute, Params } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { switchMap } from 'rxjs/operators'
import { Location } from '@angular/common'
import { FormGroup, FormBuilder } from '@angular/forms'

import { Kind } from 'src/app/kinds/shared/kind.model'
import { Pet } from '../shared/pet.model'

import { KindService } from 'src/app/kinds/shared/kind.service'
import { PetService } from '../shared/pet.service'

import { PET_VALIDATION } from '../shared/pet.validation'
import { FormUtils } from 'src/app/shared/form.utils'

@Component({
  selector: 'pet-detail',
  templateUrl: './pet-detail.component.html'
})

export class PetDetailComponent implements OnInit{
  public form: FormGroup
  public pet: Pet
  public kindOptions: Kind[]
  public formUtils: FormUtils

  public constructor(
    private petService: PetService,
    private kindService: KindService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ){
    this.form = this.formBuilder.group(PET_VALIDATION)

    this.formUtils = new FormUtils(this.form)
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
    this.form.patchValue(this.pet)
  }

  public goBack(){
    this.location.back()
  }

  public updatePet(){
    this.pet.name = this.form.get('name').value
    this.pet.race = this.form.get('race').value
    this.pet.age = this.form.get('age').value
    this.pet.weight = this.form.get('weight').value
    this.pet.city = this.form.get('city').value
    this.pet.kindId = this.form.get('kindId').value
    this.pet.userId = this.form.get('userId').value

    this.petService.update(this.pet)
    .subscribe(
      () => alert('Pet atualizado com sucesso!'),
      () => alert("Ocorreu um erro no servidor, tente mais tarde.")
    )
  }
}