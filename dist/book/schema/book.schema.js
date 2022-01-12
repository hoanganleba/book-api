"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
const mongoose = require("mongoose");
exports.BookSchema = new mongoose.Schema({
    title: { type: String, default: '', index: { text: true } },
    category: { type: String, default: '' },
    image: { type: String, default: '' },
    author: { type: String, default: '' },
    price: { type: String, default: '' },
    description: { type: String, default: '' },
    created_at: { type: Date, default: Date.now },
});
//# sourceMappingURL=book.schema.js.map