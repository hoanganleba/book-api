import { Model } from 'mongoose';
import { User } from '../user/interface/user.interface';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    login(loginDto: LoginDto): import("mongoose").Query<User & {
        _id: any;
    }, User & {
        _id: any;
    }, {}, User>;
    findExistUser(username: any): Promise<(User & {
        _id: any;
    })[]>;
    register(registerDto: RegisterDto): Promise<User & {
        _id: any;
    }>;
}
