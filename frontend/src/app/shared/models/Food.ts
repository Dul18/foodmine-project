export class Food{
  //! marks defines required
  //? define it is optional
  id!:string;
  name!:string;
  price!:number;
  tags?: string[];
  favorite!:boolean;
  stars!: number;
  imageUrl!: string;
  origins!: string[];
  cookTime!:string;
}
