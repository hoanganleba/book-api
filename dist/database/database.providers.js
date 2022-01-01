"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose_1 = require("mongoose");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose_1.default.connect('mongodb+srv://hoanganleba:megolio1998@cluster0.npceu.mongodb.net/test?retryWrites=true&w=majority'),
    },
];
//# sourceMappingURL=database.providers.js.map