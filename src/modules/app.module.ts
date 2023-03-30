import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, PrismaClient],
})
export class AppModule {}
