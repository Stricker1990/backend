import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class ApiService {
  private base_url = 'http://127.0.0.1:3000';
  constructor(private readonly httpService: HttpService) {}

  getToken(token: string) {
    return this.httpService
      .get(this.base_url + '/token', {
        headers: {
          authorization: token,
        },
      })
      .pipe(map((r) => r.data));
  }
}
