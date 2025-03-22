import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RequestContextService } from './request-context.service';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  constructor(private readonly requestContextService: RequestContextService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'] as string | undefined;

    this.requestContextService.run({ token }, () => {
      next();
    });
  }
}
