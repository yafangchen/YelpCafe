export class Review {
  _id: string;
  userId: string;
  cafeId: string;
  content: string;

  constructor(_id: string, userId: string, cafeId: string, content: string) {
    this._id = _id;
    this.userId = userId;
    this.cafeId = cafeId;
    this.content = content;
  }
}
