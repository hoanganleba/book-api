import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BookModule, DatabaseModule, UsersModule, AuthModule],
})
export class AppModule {}
