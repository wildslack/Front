export class Message {
  id: number;
  message: string;
  userId: string;
  channelId: string;
  constructor() {}

  static create(id: number, message: string, userId: string, channelId: string) {
    const msg = new Message();
    msg.id = id;
    msg.message = message;
    msg.userId = userId;
    msg.channelId = channelId;
    return msg;
  }
}
