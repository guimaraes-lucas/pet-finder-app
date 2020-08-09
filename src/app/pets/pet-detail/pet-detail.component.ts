import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Location } from '@angular/common'

import { Pet } from '../shared/pet.model';
import { PetService } from '../shared/pet.service';

@Component({
  selector: 'pet-detail',
  templateUrl: './pet-detail.component.html'
})

export class PetDetailComponent implements OnInit{
  public pet: Pet;

  public constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private location: Location
  ){ }

  public ngOnInit(){
    this.route.params
      .pipe(switchMap((params: Params) => this.petService.getPet(+params['id'])))
      .subscribe(pet => this.pet = pet)
  }

  public goBack(){
    this.location.back();
  }
}