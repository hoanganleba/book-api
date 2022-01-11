import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interface/user.interface';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User & {
        _id: any;
    }>;
    remove(id: number): string;
}
