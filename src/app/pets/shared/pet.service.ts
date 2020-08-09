import { Injectable } from '@angular/core';

import { Address } from '../../addresses/shared/address.model';
import { User } from '../../users/shared/user.model';
import { Kind } from '../../kinds/shared/kind.model';
import { Pet } from './pet.model';

const user: User = {
  id: 1,
  name: 'Luke',
  email: 'luke@gmail.com',
  password: '123456',
  address: new Address()
};

const kind: Kind = new Kind(1, 'Dog');

const PETS: Array<Pet> = [
  {
    id: 1,
    name: 'Bob 1',
    breed: 'Pinscher', 
    age: 3, 
    weight: 2.5, 
    city: 'Cristópolis',
    kind: kind, 
    user: user
  },
  {
    id: 2,
    name: 'Bob 2',
    breed: 'Pinscher', 
    age: 3, 
    weight: 2.5, 
    city: 'Cristópolis',
    kind: kind, 
    user: user
  },
  {
    id: 3,
    name: 'Bob 3',
    breed: 'Pinscher', 
    age: 3, 
    weight: 2.5, 
    city: 'Cristópolis',
    kind: kind, 
    user: user
  },
  {
    id: 4,
    name: 'Bob 4',
    breed: 'Pinscher', 
    age: 3, 
    weight: 2.5, 
    city: 'Cristópolis',
    kind: kind, 
    user: user
  },
  {
    id: 5,
    name: 'Bob 5',
    breed: 'Pinscher', 
    age: 3, 
    weight: 2.5, 
    city: 'Cristópolis',
    kind: kind, 
    user: user
  },
];

@Injectable()

export class PetService{
  public getPets(): Promise<Pet[]> {
    let promise = new Promise<Pet[]>((resolve, reject) => {
      if (PETS.length > 0) {
          resolve(PETS);
      } else {
        let error_msg = 'NÃO HÁ PETS';
        reject(error_msg);
      }
    })

    return promise;
  }

}