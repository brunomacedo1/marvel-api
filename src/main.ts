import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import * as compression from 'compression';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // app.setGlobalPrefix('api');
  app.use(compression());
  app.enableCors();
  app.useStaticAssets(join(__dirname, '..', 'images'));
  app.use('chars', express.static('images/chars'));
  app.use('movies', express.static('images/movies'));
  await app.listen(3000);
}
bootstrap();
