export class Cafe {
  _id: string;
  placeId: string;
  ownerId: string;
  name: string;
  address: string;
  openHour: string;
  phone: string;
  priceLevel: number;
  rating: number;
  isOpen: boolean;
  weekdayText: string[];
  icon: string;
  avatar: string;
  photos: string[];

  constructor(placeId: string, name: string, ownerId: string) {
    this.placeId = placeId;
    this.name = name;
    this.ownerId = ownerId;
  }
}
