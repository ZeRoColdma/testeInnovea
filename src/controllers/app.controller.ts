import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller('everything')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('notices')
  async getBitcoin(): Promise<any> {
    return await this.appService.notices();
  }
}
