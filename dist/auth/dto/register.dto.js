"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const login_dto_1 = require("./login.dto");
class RegisterDto extends (0, swagger_1.PartialType)(login_dto_1.LoginDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.RegisterDto = RegisterDto;
//# sourceMappingURL=register.dto.js.map