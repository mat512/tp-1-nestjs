import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('apikey')
  getApiKey(): string {
    return this.appService.getApiKey();
  }

  @Post('sum')
  getSum(@Body() body: { a: number; b: number }): number {
    const { a, b } = body;
    return this.appService.getSum(a, b);
  }
}
