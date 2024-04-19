import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //create application biggest root(necessary) mudule = app module
  const port = 3000;
  await app.listen(port);
  Logger.log(`Application running on port ${port}`);
  //start on 3000 port
}
bootstrap();
