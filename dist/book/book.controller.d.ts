import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(createBookDto: CreateBookDto): Promise<import("./interface/book.interface").Book & {
        _id: any;
    }>;
    findAll(category: string): Promise<import("./interface/book.interface").Book[]>;
    search(title: string): Promise<import("./interface/book.interface").Book[]>;
    findOne(id: string): Promise<import("./interface/book.interface").Book>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<import("./interface/book.interface").Book & {
        _id: any;
    }>;
    remove(id: string): Promise<any>;
}
