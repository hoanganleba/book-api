"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    phoneNumber: String,
    address: String,
    username: String,
    password: String,
    created_at: { type: Date, default: Date.now },
});
//# sourceMappingURL=user.schema.js.map