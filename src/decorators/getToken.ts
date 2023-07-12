import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetToken = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    return request.headers['authorization'];
  },
);
