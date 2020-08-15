import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Pet } from '../../pets/shared/pet.model'
import { PetService } from '../../pets/shared/pet.service'

import { Subject } from "rxjs"
import { switchMap, debounceTime, distinctUntilKeyChanged } from 'rxjs/operators'

@Component({
  selector: 'pet-search',
  templateUrl: './pet-search.component.html'
})

export class PetSearchComponent implements OnInit{
  public searchTerms: Subject<string> = new Subject()
  public pets: Pet[] = []

  public constructor(private petService: PetService, private router: Router){  }

  public ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilKeyChanged(0),
      switchMap(
      term => term ? this.petService.searchByName(term) : []))
      .subscribe(pets => this.pets = pets)
  }

  public search(term: string){
    this.searchTerms.next(term)
  }

  public gotoPet(pet: Pet){
    this.pets = []
    this.router.navigate(['/pets', pet.id])
  }
  
}