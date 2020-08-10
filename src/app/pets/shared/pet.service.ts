import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Pet } from './pet.model';

@Injectable()

export class PetService{
  public petUrl = 'http://localhost:3000/pets';
  public headers = new HttpHeaders({'Content-type': 'application/json'});

  public constructor(private http: HttpClient){ }

  public getAll(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petUrl)
      .pipe(catchError(this.handleErrors));
  }

  public getPerCity(): Observable<Pet[]> {
    return this.getAll().pipe(
      map(pets => pets.slice(0, 3)));
  }

  public getById(id: number): Observable<Pet> {
    let url = `${this.petUrl}/${id}`;
    return this.http.get<Pet>(url);
  }

  public create(pet: Pet): Observable<Pet> {
    let url = this.petUrl;
    let body = JSON.stringify(pet);

    return this.http.post<Pet>(url, body, { headers: this.headers })
      .pipe(catchError(this.handleErrors));
  }

  public update(pet: Pet): Observable<Pet> {
    let url = `${this.petUrl}/${pet.id}`;
    let body = JSON.stringify(pet);

    return this.http.put<Pet>(url, body, { headers: this.headers })
      .pipe(catchError(this.handleErrors));
  }

  public delete(id: number): Observable<null> {
    let url = `${this.petUrl}/${id}`;

    return this.http.delete(url, { headers: this.headers })
      .pipe(catchError(this.handleErrors),
        map(() => null));
  }

  public searchByName(term: string): Observable<Pet[]> {
    let url = `${this.petUrl}/?name=${term}`;

    return this.http.get<Pet[]>(url)
      .pipe(catchError(this.handleErrors));
  }

  public handleErrors(error: Response){
    console.log('SALVANDO O ERRO NUM ARQUIVO DE LOG - DETALHES DO ERRO =>', error);
    return Observable.throw(error);
  }

}