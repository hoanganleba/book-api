import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [BookModule, DatabaseModule],
})
export class AppModule {}
