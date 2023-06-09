import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { NextFunction, Response, Request } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization)
      throw new HttpException('No authorization token', HttpStatus.FORBIDDEN);
    if (authorization === '123456') next();
    else
      throw new HttpException(
        'Invalid authorization token',
        HttpStatus.FORBIDDEN,
      );
  }
}
