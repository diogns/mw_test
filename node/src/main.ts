import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// Debug errors
import { HttpAdapterHost } from '@nestjs/core';
import { AllExceptionsFilter } from './http-exception.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // BASE_URI
    app.setGlobalPrefix('mw/api/');

    // Cors
    app.enableCors();

    // Swagger
    const config = new DocumentBuilder()
        .setTitle('Api documentation')
        .setDescription('Api documentation desriptio')
        .setVersion('1.0')
        .addTag('items')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);

    // Validation pipe for DTOs
    app.useGlobalPipes(new ValidationPipe());

    // Error handling
    const httpAdapter = app.get(HttpAdapterHost);
    app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

    await app.listen(5000);
}
bootstrap();
