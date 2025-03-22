// request-context.service.ts
import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

interface RequestContext {
  token?: string;
}

@Injectable()
export class RequestContextService {
  private readonly asyncLocalStorage = new AsyncLocalStorage<RequestContext>();

  run(context: RequestContext, callback: () => void) {
    this.asyncLocalStorage.run(context, callback);
  }

  getToken(): string | undefined {
    const store = this.asyncLocalStorage.getStore();
    return store?.token;
  }

  setToken(token: string) {
    const store = this.asyncLocalStorage.getStore();
    if (store) {
      store.token = token;
    }
  }
}
