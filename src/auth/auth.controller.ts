import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() response: Response) {
    const user = await this.authService.login(loginDto);

    if (user.length !== 0) {
      response.send({ status: 'Success', message: 'Login Success' });
    } else {
      response.send({
        status: 'Unauthorized',
        message: 'Invalid username or password',
      });
    }
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto, @Res() response: Response) {
    const result = await this.authService.findExistUser(registerDto.username);

    if (result.length !== 0) {
      response.send({
        status: 'Failed',
        message: 'User already exists. Please enter again.',
      });
    } else {
      this.authService.register(registerDto);
      response.send({ status: 'Success', message: 'Register Successfully' });
    }
  }
}
