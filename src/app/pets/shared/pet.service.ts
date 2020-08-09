import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Pet } from './pet.model';

@Injectable()

export class PetService{
  public petUrl = 'pets';

  public constructor(private http: HttpClient){ }

  public getPets(): Observable<Pet[]> {
    return this.http.get(this.petUrl)
      .pipe(map((response: HttpResponse<any>) => response.body.json().data as Pet[]))
      .pipe(catchError(this.handleErrors));
  }

  public getCityPets(): Observable<Pet[]> {
    return this.getPets().pipe(
      map(pets => pets.slice(0, 3)));
  }

  public getPet(id: number): Observable<Pet> {
    let url = `${this.petUrl}/${id}`;
    return this.http.get(this.petUrl).pipe(
      map((response: HttpResponse<any>) => response.body.json().data as Pet));
  }

  public handleErrors(error: Response){
    console.log('SALVANDO O ERRO NUM ARQUIVO DE LOG - DETALHES DO ERRO =>', error);
    return Observable.throw(error);
  }

}