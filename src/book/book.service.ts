import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './interface/book.interface';

@Injectable()
export class BookService {
  constructor(
    @Inject('BOOK_MODEL')
    private readonly bookModel: Model<Book>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    const newBook = await new this.bookModel(createBookDto);
    return newBook.save();
  }

  async findAll(): Promise<Book[]> {
    return await this.bookModel.find().exec();
  }

  async search(query: string): Promise<Book[]> {
    return await this.bookModel.find({
      $text: { $search: query },
    });
  }

  async findOne(id: string): Promise<Book> {
    return await this.bookModel.findById(id).exec();
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    return await this.bookModel.findByIdAndUpdate(id, updateBookDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return await this.bookModel.findByIdAndRemove(id);
  }
}
