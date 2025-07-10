import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto, IAuthResponse } from '@rehistoria/shared';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() dto: LoginDto): Promise<IAuthResponse> {
    return this.authService.login(dto);
  }

  @Post('register')
  register(@Body() dto: RegisterDto): Promise<IAuthResponse> {
    return this.authService.register(dto);
  }
}
