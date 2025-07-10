import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MessagePatterns, LoginDto, RegisterDto, IAuthResponse } from '@rehistoria/shared';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
  ) {}

  async login(dto: LoginDto): Promise<IAuthResponse> {
    return firstValueFrom(this.authClient.send(MessagePatterns.AUTH_LOGIN, dto));
  }

  async register(dto: RegisterDto): Promise<IAuthResponse> {
    return firstValueFrom(this.authClient.send(MessagePatterns.AUTH_REGISTER, dto));
  }
}
