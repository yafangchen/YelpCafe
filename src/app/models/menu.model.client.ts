export class Menu {
  _id: string;
  cafeId: string;
  image: string;
  price: string;
  name: string;
  description: string;

  constructor(cafeId: string, image: string, price: string, description: string) {
    this.cafeId = cafeId;
    this.image = image;
    this.price = price;
    this.description = description;
  }
}
