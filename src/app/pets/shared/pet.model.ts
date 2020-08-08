import { User } from 'src/app/users/shared/user.model';
import { Kind } from 'src/app/kinds/shared/kind.model'

export class Pet {
  public id: number;
  public name: string;
  public breed: string;
  public age: number;
  public weight: number;
  public city: string;
  public kind: Kind;
  public user: User;
}