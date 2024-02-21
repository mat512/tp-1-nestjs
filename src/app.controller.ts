import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('API_KEY') private readonly apiKey: string,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('apikey')
  getApiKey(): string {
    return this.apiKey;
  }
}
