import { Component, Input } from '@angular/core';

import { Pet } from '../shared/pet.model';

@Component({
  selector: 'pet-detail',
  templateUrl: './pet-detail.component.html'
})

export class PetDetailComponent{
  @Input() public pet: Pet;

  public constructor(){
    this.pet = new Pet();
  }
}