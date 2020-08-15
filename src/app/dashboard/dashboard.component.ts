import { Component, OnInit } from '@angular/core'

import { Pet } from '../pets/shared/pet.model'
import { PetService } from '../pets/shared/pet.service'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  public pets: Array<Pet>

  public constructor(private petService: PetService){  }

  public ngOnInit(){
    this.petService.getAll()
      .subscribe(
        pets => this.pets = pets),
        error => alert("Ocorreu um erro no servidor, tente mais tarde.")
  }  
}