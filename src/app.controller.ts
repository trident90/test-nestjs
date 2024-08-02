import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Logger } from 'nestjs-pino';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: Logger,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('value')
  async getValue(@Query('key') key: string): Promise<string> {
    this.logger.log(`Calling getValue(${key}): ${AppController.name}`);
    return this.appService.getValue(key);
  }

  @Post('value')
  async setValue(@Body() body): Promise<boolean> {
    const key = body['key'];
    const value = body['value'];
    this.logger.log(
      `Calling setValue(${key}, ${value}): ${AppController.name}`,
    );
    return this.appService.setValue(key, value);
  }
}
