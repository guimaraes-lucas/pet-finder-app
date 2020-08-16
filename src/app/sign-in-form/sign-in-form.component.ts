import { Component } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'

import { SIGN_IN_VALIDATION } from '../users/shared/user.validation'
import { FormUtils } from 'src/app/shared/form.utils'

@Component({
  selector: 'sign-in-form',
  templateUrl: './sign-in-form.component.html'
})

export class SignInFormComponent {
  public form: FormGroup
  public formUtils: FormUtils

  public constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group(SIGN_IN_VALIDATION)
    this.formUtils = new FormUtils(this.form)
  }
  
  public signInUser(){
    console.log("Formulário de SignIn enviado!")
    console.log(this.form.value)
  }
}