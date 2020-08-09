import { Component, OnInit } from '@angular/core';

import { Pet } from '../pets/shared/pet.model'
import { PetService } from '../pets/shared/pet.service'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent{
  public pets: Array<Pet>;

  public constructor(private petService: PetService){  }

  public ngOnInit(){
    this.petService.getPets()
      .then((pets) => this.pets = pets)
      .catch((error_msg) => alert(error_msg));
  }  
}