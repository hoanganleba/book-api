import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './interface/book.interface';
export declare class BookService {
    private readonly bookModel;
    constructor(bookModel: Model<Book>);
    create(createBookDto: CreateBookDto): Promise<Book & {
        _id: any;
    }>;
    findAll(): Promise<Book[]>;
    findOne(id: string): Promise<Book>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<Book & {
        _id: any;
    }>;
    remove(id: string): Promise<any>;
}
