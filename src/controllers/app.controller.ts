import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller('everything')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('notices')
  async getBitcoin(): Promise<any> {
    return await this.appService.newNotice();
  }

  @Get('notices')
  async getNewsBitCoin(): Promise<any> {
    return await this.appService.getData();
  }
}
