import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @ApiQuery({
    name: 'category',
    type: String,
    required: false,
  })
  @Get()
  async findAll(@Query('category') category: string) {
    if (category) {
      const result = await this.bookService.findAll();
      return result.filter((item) => item.category.includes(category));
    }
    return this.bookService.findAll();
  }

  @Get('search')
  async search(@Query('title') title: string) {
    const result = await this.bookService.findAll();
    return result.filter((item) => {
      return item.title.toLowerCase().indexOf(title.toLowerCase()) > -1;
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}
