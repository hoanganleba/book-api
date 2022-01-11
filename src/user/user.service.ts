import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
