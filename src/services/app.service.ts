import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private prisma: PrismaClient,
  ) {}

  async notices(): Promise<any> {
    let notices = {}
    let data = await this.httpService.axiosRef(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.API_KEY}`,
    );

    for (let i = 0; i < data.data.articles.length; i++) {
      let { author, title, description } = data.data.articles[i];
      notices = { ...notices, [i]: { author, title, description } };
      await this.prisma.notice.create({
        data: {
          author,
          title,
          description,
        },
      });
    }

    return notices;
  }
}
