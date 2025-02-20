import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    if (status == 400) {
      return response.status(status).json(exception.getResponse());
    }
    // If status is not 400, render the error page
    response.status(status).render('guest/error', {
      message: exception.message.startsWith('ThrottlerException:')
        ? exception.message.replace(/^ThrottlerException:\s*/, '')
        : exception.message.length < 60
          ? exception.message
          : 'Not Found',
      url: request.url,
      status: status,
    });
  }
}