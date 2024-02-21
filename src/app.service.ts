import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('API_KEY') private readonly apiKey: string) {}

  getHello(): string {
    return 'Hello World!';
  }

  getApiKey(): string {
    return this.apiKey;
  }

  getSum(a: number, b: number): number {
    return a + b;
  }
}
