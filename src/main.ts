import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //create application biggest root(necessary) mudule = app module

  await app.listen(3000);
  //start on 3000 port
}
bootstrap();
