import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(id: string): Promise<import("./interface/user.interface").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./interface/user.interface").User & {
        _id: any;
    }>;
    remove(id: string): string;
}
