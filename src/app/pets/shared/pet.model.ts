export class Pet {
  constructor(
    public id: number = 0,
    public name: string = '',
    public race: string = '',
    public age: number = 0,
    public weight: number = 0,
    public city: string = '',
    public kindId: number = null,
    public userId: number = null
  ){}
}