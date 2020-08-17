import { Component } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'

import { AuthService } from '../shared/auth.service'
import { SIGN_UP_VALIDATION } from '../users/shared/user.validation'
import { FormUtils } from 'src/app/shared/form.utils'
import { User } from '../users/shared/user.model'

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html'
})

export class SignUpFormComponent {
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
  
  public signUpUser(){
    this.submitted = true
    this.authService.signUp(this.form.value as User)
      .subscribe(
        () => {
          alert('Parabéns, sua conta foi criada com sucesso')
          this.router.navigate(['/dashboard'])
          this.formErrors = null
        },
        (error) => {
          this.submitted = false

          if ( error.status === 422) {
            this.formErrors = JSON.parse(error._body).errors.full_messages
          } else {
            this.formErrors = ["Não foi possível processar a sua solicitação. Por favor, tente mais tarde."]
          }
        }
      )
  }

  public passwordConfirmationValidator(form: FormGroup){
    if(form.get('password').dirty && form.get('password').value === form.get('passwordConfirmation').value)
      form.get('passwordConfirmation').setErrors(null)
    else
      form.get('passwordConfirmation').setErrors({ 'mismatch': true })
  }

  private setupForm(){
    this.form = this.formBuilder.group(SIGN_UP_VALIDATION, { validators: this.passwordConfirmationValidator })
  }
}