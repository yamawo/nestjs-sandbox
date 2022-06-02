import { Controller, Get, Post } from '@nestjs/common';
import { AppService, PublicItem } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('items')
  getItems(): PublicItem[] {
    return this.appService.getPublicItems();
  }

  // @Post()
  // postHello(): string {
  //   return this.appService.getHello();
  // }
}
