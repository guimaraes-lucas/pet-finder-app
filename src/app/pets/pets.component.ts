import { Component, OnInit } from '@angular/core';

import { Pet } from './shared/pet.model';
import { PetService } from './shared/pet.service';

@Component({
  selector: 'pets',
  templateUrl: './pets.component.html'
})

export class PetsComponent implements OnInit{
  public pets: Array<Pet>;
  public selectedPet: Pet;

  public constructor(private petService: PetService){  }

  public ngOnInit(){
    this.petService.getPets()
      .subscribe(
        pets => this.pets = pets),
        error => alert("Ocorreu um erro no servidor, tente mais tarde.");
  }  

  public onSelect(pet: Pet): void {
    this.selectedPet = pet;
  }
}