"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookProviders = void 0;
const book_schema_1 = require("./schema/book.schema");
exports.bookProviders = [
    {
        provide: 'BOOK_MODEL',
        useFactory: (connection) => connection.model('Book', book_schema_1.BookSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=book.providers.js.map