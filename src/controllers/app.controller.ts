import { Controller, Post, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller('everything')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('notices')
  async newNotices(): Promise<any> {
    return await this.appService.notices();
  }

  @Get('notices')
  async getNotices(): Promise<any> {
    return await this.appService.notices();
  }
}
