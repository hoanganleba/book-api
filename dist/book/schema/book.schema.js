"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
const mongoose = require("mongoose");
exports.BookSchema = new mongoose.Schema({
    title: { type: String, index: { text: true } },
    image: String,
    author: String,
    price: String,
    created_at: { type: Date, default: Date.now },
});
//# sourceMappingURL=book.schema.js.map