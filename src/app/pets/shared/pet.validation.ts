import { Validators } from '@angular/forms'

export const PET_VALIDATION = {
  name: [null, [Validators.required, 
                Validators.minLength(2), 
                Validators.maxLength(50)]
        ],
  race: [null, [Validators.required, 
                Validators.minLength(2),
                Validators.maxLength(50)]
        ],
  age: [null, Validators.required],
  weight: [null, Validators.required],
  city: [null, [Validators.required, 
                Validators.minLength(2), 
                Validators.maxLength(60)]
        ],
  kindId: [null, Validators.required],
  userId: [null]
}