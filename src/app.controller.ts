import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GetToken } from './decorators/getToken';
import { RequestContextService } from './request-context.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly requestContextService: RequestContextService,
  ) {}

  @Get()
  getHello() {
    const token = this.requestContextService.getToken();
    return this.appService.getHello(token);
  }

  @Get('token')
  getToken(@GetToken() token: string) {
    return 'token:' + token;
  }
}
