import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UsersController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './user.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UserService, ...userProviders],
})
export class UsersModule {}
