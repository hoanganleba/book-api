"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const path_1 = require("path");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Book')
        .setDescription('Assignment 3 android')
        .setVersion('1.0')
        .addTag('books')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    app.useStaticAssets(path_1.default.join(__dirname, 'assets/swagger-ui-dist/'), {
        prefix: '/swagger',
    });
    await app.listen(8000);
}
bootstrap();
//# sourceMappingURL=main.js.map