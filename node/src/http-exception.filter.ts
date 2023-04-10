import {
    ExceptionFilter, //
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: any, host: ArgumentsHost): void {
        // In certain situations `httpAdapter` might not be available in the
        // constructor method, thus we should resolve it here.
        const { httpAdapter } = this.httpAdapterHost;

        const ctx = host.switchToHttp();
        const message = exception;
        let httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

        if (exception.name === 'MongoServerError') {
            httpStatus = HttpStatus.BAD_REQUEST;
        }
        // Print all exceptions except NotFoundException
        if (exception.name !== 'NotFoundException') {
            console.log('exception', exception);
        }

        const responseBody = {
            statusCode: httpStatus,
            timestamp: new Date().toISOString(),
            path: httpAdapter.getRequestUrl(ctx.getRequest()),
            message,
        };

        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }
}
