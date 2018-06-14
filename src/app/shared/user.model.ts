export class User {
  idUser: number;
  email: string;
  password: string;
  nickname: string;
  workspaceName: string;

  constructor() { }

  static create(idUser: number, nickname: string): User {
    const currentUser = new User();
    currentUser.idUser = idUser;
    currentUser.nickname = nickname;
    return currentUser;
  }
}

