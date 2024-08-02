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
    const retVal = await this.appService.getValue(key);
    const result: any = {
      code: '20000',
      message: 'Success',
      results: retVal,
    };
    this.logger.log(`Calling getValue(${key}): ${AppController.name}`);
    return result;
  }

  @Post('value')
  async setValue(@Body() body): Promise<boolean> {
    const key = body['key'];
    const value = body['value'];
    const retVal = await this.appService.setValue(key, value);
    const result: any = {
      code: '20000',
      message: 'Success',
      results: retVal,
    };
    this.logger.log(
      `Calling setValue(${key}, ${value}): ${AppController.name}`,
    );
    return result;
  }
}
