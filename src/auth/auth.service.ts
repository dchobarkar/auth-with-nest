import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';

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
  constructor(private jwtService: JwtService) {}

  validateUser({ userName, password }: AuthPayloadDto) {
    const findUser = fakeUsers.find((user) => user.userName === userName);
    if (!findUser) return null;
    if (password === findUser.password) {
      const { password, ...user } = findUser;
      return this.jwtService.sign(user);
    }
  }
}
