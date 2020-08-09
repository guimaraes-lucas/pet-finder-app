import { Component, OnInit } from '@angular/core';

import { Pet } from './shared/pet.model';
import { PetService } from './shared/pet.service';

@Component({
  selector: 'pets',
  templateUrl: './pets.component.html',
  providers: [ PetService ]
})

export class PetsComponent implements OnInit{
  public pets: Array<Pet>;
  public selectedPet: Pet;

  public constructor(private petService: PetService){  }

  public ngOnInit(){
    this.pets = this.petService.getPets();
  }  

  public onSelect(pet: Pet): void {
    this.selectedPet = pet;
  }
}