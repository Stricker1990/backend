import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GetToken } from './decorators/getToken';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@GetToken() token: string) {
    return this.appService.getHello(token);
  }

  @Get('token')
  getToken(@GetToken() token: string) {
    return 'token:' + token;
  }
}
