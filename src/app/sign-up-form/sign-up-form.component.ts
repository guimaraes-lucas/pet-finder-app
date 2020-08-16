import { Component } from '@angular/core'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

import { USER_VALIDATION } from '../users/shared/user.validation'
import { FormUtils } from 'src/app/shared/form.utils'

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html'
})

export class SignUpFormComponent {
  public form: FormGroup
  public formUtils: FormUtils

  public constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group(USER_VALIDATION)
    this.formUtils = new FormUtils(this.form)
  }
  
  public signUpUser(){
    console.log("Formulário de SignUp enviado!")
    console.log(this.form.value)
  }
}