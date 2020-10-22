export class Posts {
  constructor({ userId, id, title, body }) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
  }
}
