import { Validators } from '@angular/forms'

export const USER_VALIDATION = {
  name: [null, [Validators.required, 
                Validators.minLength(7), 
                Validators.maxLength(100)]
        ],
  email: [null, [ Validators.required, 
                  Validators.email,
                  Validators.minLength(2),
                  Validators.maxLength(100)]
          ],
  password: [null, [Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(60)]
            ],
  passwordConfirmation: [null, [ Validators.required,
                                  Validators.minLength(8),
                                  Validators.maxLength(60)]
                         ],
  address: [null, [ Validators.required, 
                    Validators.minLength(2),
                    Validators.maxLength(255)]
            ]
}