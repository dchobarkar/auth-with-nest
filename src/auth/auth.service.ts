import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './auth.dto';

const fakeUsers = [
  {
    id: 1,
    userName: 'anson',
    password: 'password',
  },
  {
    id: 2,
    userName: 'jack',
    password: 'password',
  },
];

@Injectable()
export class AuthService {
  validateUser({ userName, password }: AuthPayloadDto) {
    const findUser = fakeUsers.find((user) => user.userName === userName);
    if (!findUser) return null;
    if (password === findUser.password) {
    }
  }
}
