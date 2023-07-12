import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    app.listen(3000);
  });
  afterAll(() => {
    app.close();
  });
  it('/ (GET first)', () => {
    const token = 'first test';
    return request(app.getHttpServer())
      .get('/')
      .set('Authorization', token)
      .expect(200)
      .expect('token:' + token);
  });

  it('/ (GET second)', () => {
    const token = 'second test';
    return request(app.getHttpServer())
      .get('/')
      .set('Authorization', token)
      .expect(200)
      .expect('token:' + token);
  });
});
