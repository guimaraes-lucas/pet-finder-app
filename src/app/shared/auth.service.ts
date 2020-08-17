import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { catchError } from 'rxjs/operators'
import { Observable } from 'rxjs'

import { User } from '../users/shared/user.model'

export let userSigned: User

@Injectable()

export class AuthService{
  public userUrl = 'http://localhost:3000/api/users'
  public headers = new HttpHeaders({'Content-type': 'application/json'})

  public constructor(private http: HttpClient){ }

  public signUp(user: User): Observable<User>{
    let url = this.userUrl
    let body = JSON.stringify(user)

    return this.http.post<User>(url, body, { headers: this.headers })
      .pipe(catchError(this.handleErrors))
  }

  public signIn(email:string, password: string): Observable<null>{
    let signInData = {
      email: email,
      password: password
    }

    return null
  }

  public signOut(){
    userSigned = null
  }

  public userSignedIn(): boolean{
    return !!userSigned
  }

  public handleErrors(error: Response){
    console.log('SALVANDO O ERRO NUM ARQUIVO DE LOG - DETALHES DO ERRO =>', error)
    return Observable.throw(error)
  }
}