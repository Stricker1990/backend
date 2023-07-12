import { Injectable, Logger } from '@nestjs/common';
import { ApiService } from './api.service';

@Injectable()
export class AppService {
  constructor(private readonly apiService: ApiService) {}
  getHello(token: string) {
    Logger.log('Some logic');
    return this.apiService.getToken(token);
  }
}
