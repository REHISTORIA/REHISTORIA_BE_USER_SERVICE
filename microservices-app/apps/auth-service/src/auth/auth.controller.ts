import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { MessagePatterns, RegisterDto, LoginDto } from '@rehistoria/shared';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern(MessagePatterns.AUTH_REGISTER)
  async register(@Payload() payload: RegisterDto) {
    return this.authService.register(payload);
  }

  @MessagePattern(MessagePatterns.AUTH_LOGIN)
  async login(@Payload() payload: LoginDto) {
    const user = await this.authService.validateUser(payload.email, payload.password);
    if (!user) throw new Error('Invalid credentials');

    return this.authService.login(user);
  }
}
