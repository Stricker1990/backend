import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiService } from './api.service';
import { HttpModule } from '@nestjs/axios';
import { RequestContextService } from './request-context.service';
import { TokenMiddleware } from './token.middleware';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, ApiService, RequestContextService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenMiddleware).forRoutes('*');
  }
}
