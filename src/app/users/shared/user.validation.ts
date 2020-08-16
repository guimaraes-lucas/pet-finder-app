import { Validators } from '@angular/forms'

export const SIGN_IN_VALIDATION = {
        email: [null, [ Validators.required, 
                        Validators.email,
                        Validators.minLength(2),
                        Validators.maxLength(100)]
                ],
        password: [null, [Validators.required,
                          Validators.minLength(8),
                          Validators.maxLength(60)]
                  ]
      }

export const USER_VALIDATION = {
        ...SIGN_IN_VALIDATION,
        ...{
  name: [null, [Validators.required, 
                Validators.minLength(2), 
                Validators.maxLength(100)]
        ],
  address: [null, [ Validators.required, 
                    Validators.minLength(2),
                    Validators.maxLength(255)]
            ]
}
}

export const SIGN_UP_VALIDATION = { 
        ...USER_VALIDATION, 
        ...{ passwordConfirmation: [null, Validators.required] }
}
