export class Message {
  id: number;
  message: string;
  idUser: number;
  idChannel: number;
  postDate = new Date();
  userNickname: string;

  constructor() {}

  static create(id: number, message: string, idUser: number, idChannel: number, date: Date, userNickname: string) {
    const msg = new Message();
    msg.id = id;
    msg.message = message;
    msg.idUser = idUser;
    msg.idChannel = idChannel;
    msg.postDate = date;
    msg.userNickname = userNickname;
    return msg;
  }
}
