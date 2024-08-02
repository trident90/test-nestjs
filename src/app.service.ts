import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  getHello(): string {
    return 'Hello World!';
  }

  async getValue(key: string): Promise<string> {
    this.logger.log(`getValue(${key})`);
    const value: string = '0x1234';
    return value;
  }

  async setValue(key: string, value: string): Promise<boolean> {
    this.logger.log(`setValue(${key}, ${value})`);
    const retVal: boolean = false;
    return retVal;
  }
}
