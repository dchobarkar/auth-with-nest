import { Body, Controller, Post } from '@nestjs/common';
import { AuthPayloadDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() authPayload: AuthPayloadDto) {}
}
