import { ActivatedRoute, Params } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { switchMap } from 'rxjs/operators'
import { Location } from '@angular/common'

import { Pet } from '../shared/pet.model'
import { Kind } from 'src/app/kinds/shared/kind.model'

import { PetService } from '../shared/pet.service'
import { KindService } from 'src/app/kinds/shared/kind.service'

@Component({
  selector: 'pet-detail',
  templateUrl: './pet-detail.component.html'
})

export class PetDetailComponent implements OnInit{
  public pet: Pet
  public kindOptions: Kind[]

  public constructor(
    private petService: PetService,
    private kindService: KindService,
    private route: ActivatedRoute,
    private location: Location
  ){ }

  public ngOnInit(){
    this.kindService.getAll()
      .subscribe(
        kinds => this.kindOptions = kinds),
        error => alert("Ocorreu um erro no servidor, tente mais tarde.")

    this.route.params
      .pipe(switchMap((params: Params) => this.petService.getById(+params['id'])))
      .subscribe(
        pet => this.pet = pet,
        error => alert("Ocorreu um erro no servidor, tente mais tarde.")
      )
  }

  public goBack(){
    this.location.back()
  }

  public updatePet(){
    if(!this.pet.name){
      alert("O pet deve ter um nome")
    }else{
      this.petService.update(this.pet)
      .subscribe(
        () => alert('Pet atualizado com sucesso!'),
        () => alert("Ocorreu um erro no servidor, tente mais tarde.")
      )
    }
  }
}