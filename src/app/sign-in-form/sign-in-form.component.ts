import { Component } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'

import { AuthService, userSigned } from '../shared/auth.service'

import { SIGN_IN_VALIDATION } from '../users/shared/user.validation'
import { FormUtils } from 'src/app/shared/form.utils'

@Component({
  selector: 'sign-in-form',
  templateUrl: './sign-in-form.component.html'
})

export class SignInFormComponent {
  public form: FormGroup
  public formUtils: FormUtils
  public submitted: boolean
  public formErrors: Array<string>

  public constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ){
    this.setupForm()
    this.formUtils = new FormUtils(this.form)
    this.submitted = false
    this.formErrors = null
  }
  
  public signInUser(){
    this.submitted = true
    this.authService.signIn(this.form.get('email').value, this.form.get('password').value)
    
    if (userSigned) {
      this.router.navigate(['/dashboard'])
      this.formErrors = null
    }else{
      this.submitted = false

      // if ( error.status === 401) {
      //   this.formErrors = JSON.parse(error._body).errors.full_messages
      // } else {
        this.formErrors = ["Não foi possível processar a sua solicitação. Por favor, tente mais tarde."]
      // }
    }
  }

  private setupForm(){
    this.form = this.formBuilder.group(SIGN_IN_VALIDATION)
  }
}