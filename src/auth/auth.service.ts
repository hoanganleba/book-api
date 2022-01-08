import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../user/interface/user.interface';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<User>,
  ) {}

  login(loginDto: LoginDto) {
    return this.userModel.find({
      username: loginDto.username,
      password: loginDto.password,
    });
  }

  async findExistUser(username: any) {
    return this.userModel.find({ username: username });
  }

  async register(registerDto: RegisterDto) {
    const newRegisterUser = new this.userModel(registerDto);
    return newRegisterUser.save();
  }
}
