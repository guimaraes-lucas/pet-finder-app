export class User {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public passwordConfirmation: string,
    public address: string,
    public id?: number
  ){}
}