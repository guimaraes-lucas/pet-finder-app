import { Component } from '@angular/core'
import { Router } from "@angular/router"

import { AuthService, userSigned } from '../shared/auth.service'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent{

  public constructor(private authService: AuthService, private router: Router){}

  public userSignedIn(): boolean{
    return this.authService.userSignedIn()
  }

  public signOutUser(){
    this.authService.signOut()
    if (!userSigned) {
      this.router.navigate(['/sign-in'])
    }
  }  
}