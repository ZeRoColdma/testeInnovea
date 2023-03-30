import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('de9b8ebdb1d94b9985ef50760a0c748e');

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private prisma: PrismaClient,
  ) {}

  async newNotice(): Promise<any> {
    let data = await newsapi.v2.topHeadlines({
      q: 'trump',
      category: 'politics',
      language: 'en',
      country: 'us',
    });
    const { author, title, description } = data.articles[0];

    try {
      this.prisma.notice.create({
        data: {
          author: "author",
          title: "title",
          description: "description",
        },
      });
    } catch (error) {
      return error;
    }

    return {"message": "Dados Salvos com sucesso", "data": { author, title, description } };
  }

  async getData(): Promise<any> {
    const response = this.prisma.notice.findMany();
    return response;
  }
}
