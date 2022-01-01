"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let BookService = class BookService {
    constructor(bookModel) {
        this.bookModel = bookModel;
    }
    async create(createBookDto) {
        const newBook = await new this.bookModel(createBookDto);
        return newBook.save();
    }
    async findAll() {
        return await this.bookModel.find().exec();
    }
    async search(query) {
        return await this.bookModel.find({
            $text: { $search: query },
        });
    }
    async findOne(id) {
        return await this.bookModel.findById(id).exec();
    }
    async update(id, updateBookDto) {
        return await this.bookModel.findByIdAndUpdate(id, updateBookDto, {
            new: true,
        });
    }
    async remove(id) {
        return await this.bookModel.findByIdAndRemove(id);
    }
};
BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('BOOK_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map