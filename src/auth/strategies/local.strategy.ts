import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  validate(userName: string, password: string) {
    const user = this.authService.validateUser({ userName, password });

    if (!user) throw new UnauthorizedException();
    return user;
  }
}
