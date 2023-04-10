"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const core_2 = require("@nestjs/core");
const http_exception_filter_1 = require("./http-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('mw/api/');
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Api documentation')
        .setDescription('Api documentation desriptio')
        .setVersion('1.0')
        .addTag('items')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const httpAdapter = app.get(core_2.HttpAdapterHost);
    app.useGlobalFilters(new http_exception_filter_1.AllExceptionsFilter(httpAdapter));
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map