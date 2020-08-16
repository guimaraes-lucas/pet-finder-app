import { FormGroup } from '@angular/forms'

export class FormUtils {
  public constructor(private form: FormGroup){ }

  // form errors methods
  public fieldClassForErrorOrSuccess(fieldName: string){
    return {
      "needs-validation": this.showFieldError(fieldName),
      "was-validated": this.getField(fieldName).valid
    }
  }

  public showFieldError(fieldName: string): boolean {
    let field = this.getField(fieldName)
    return field.invalid && ( field.touched || field.dirty )
  }

  public getField(fieldName: string){
    return this.form.get(fieldName)
  }
}