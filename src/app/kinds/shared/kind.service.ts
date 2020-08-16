import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { map, catchError } from 'rxjs/operators'
import { Observable } from 'rxjs'

import { Kind } from './kind.model'

@Injectable()

export class KindService{
  public kindUrl = 'http://localhost:3000/api/kinds'
  public headers = new HttpHeaders({'Content-type': 'application/json'})

  public constructor(private http: HttpClient){ }

  public getAll(): Observable<Kind[]> {
    return this.http.get<Kind[]>(this.kindUrl)
      .pipe(catchError(this.handleErrors))
  }

  public getPerCity(): Observable<Kind[]> {
    return this.getAll().pipe(
      map(kinds => kinds.slice(0, 3)))
  }

  public getById(id: number): Observable<Kind> {
    let url = `${this.kindUrl}/${id}`
    return this.http.get<Kind>(url)
  }

  public create(kind: Kind): Observable<Kind> {
    let url = this.kindUrl
    let body = JSON.stringify(kind)

    return this.http.post<Kind>(url, body, { headers: this.headers })
      .pipe(catchError(this.handleErrors))
  }

  public update(kind: Kind): Observable<Kind> {
    let url = `${this.kindUrl}/${kind.id}`
    let body = JSON.stringify(kind)

    return this.http.put<Kind>(url, body, { headers: this.headers })
      .pipe(catchError(this.handleErrors))
  }

  public delete(id: number): Observable<null> {
    let url = `${this.kindUrl}/${id}`

    return this.http.delete(url, { headers: this.headers })
      .pipe(catchError(this.handleErrors),
        map(() => null))
  }

  public handleErrors(error: Response){
    console.log('SALVANDO O ERRO NUM ARQUIVO DE LOG - DETALHES DO ERRO =>', error)
    return Observable.throw(error)
  }

}