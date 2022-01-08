import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto, @Res() response: Response) {
    const user = await this.authService.login(loginDto);

    if (user.length !== 0) {
      response.status(HttpStatus.OK).send('Login Success');
    } else {
      response
        .status(HttpStatus.FORBIDDEN)
        .send('Invalid username or password');
    }
  }

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}
