"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    firstname: { type: String, default: '' },
    lastname: { type: String, default: '' },
    phoneNumber: { type: String, default: '' },
    address: { type: String, default: '' },
    username: { type: String, default: '' },
    password: { type: String, default: '' },
    created_at: { type: Date, default: Date.now },
});
//# sourceMappingURL=user.schema.js.map