import { Component } from '@angular/core'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

import { SIGN_UP_VALIDATION } from '../users/shared/user.validation'
import { FormUtils } from 'src/app/shared/form.utils'

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html'
})

export class SignUpFormComponent {
  public form: FormGroup
  public formUtils: FormUtils

  public constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group(SIGN_UP_VALIDATION, { validators: this.passwordConfirmationValidator })
    this.formUtils = new FormUtils(this.form)
  }
  
  public signUpUser(){
    console.log("Formulário de SignUp enviado!")
    console.log(this.form.value)
  }

  public passwordConfirmationValidator(form: FormGroup){
    if(form.get('password').dirty && form.get('password').value === form.get('passwordConfirmation').value)
      form.get('passwordConfirmation').setErrors(null)
    else
      form.get('passwordConfirmation').setErrors({ 'mismatch': true })
  }
}