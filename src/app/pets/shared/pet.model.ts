import { Validators } from '@angular/forms'

export const petValidations = {
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
  userId: [null, Validators.required]
}

export class Pet {
  constructor(
    public id: number = 0,
    public name: string = '',
    public race: string = '',
    public age: number = 0,
    public weight: number = 0,
    public city: string = '',
    public kindId: number = 1,
    public userId: number = 0
  ){}
}