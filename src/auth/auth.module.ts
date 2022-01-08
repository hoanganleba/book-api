import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from '../user/user.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService, ...userProviders],
})
export class AuthModule {}
