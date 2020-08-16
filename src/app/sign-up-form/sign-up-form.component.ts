import { Component } from '@angular/core'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

import { USER_VALIDATION } from '../users/shared/user.validation'

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html'
})

export class SignUpFormComponent {
  public userForm: FormGroup

  public constructor(private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group(USER_VALIDATION)
  }
  
  public signUpUser(){
    console.log("Formulário de SignUp enviado!")
    console.log(this.userForm.value)
  }
}