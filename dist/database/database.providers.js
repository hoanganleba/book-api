"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect('mongodb+srv://hoanganleba:megolio1998@cluster0.npceu.mongodb.net/test?retryWrites=true&w=majority'),
    },
];
//# sourceMappingURL=database.providers.js.map