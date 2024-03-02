import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/message') // =@Get('/') //API 이름인 듯 하다 Get이라는 메서드임
  getHello(): string {
    return this.appService.getHello();
  }
}
