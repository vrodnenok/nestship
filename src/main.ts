import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(resolve('./src/public'));
  app.setBaseViewsDir(resolve('./src/views'));
  app.setViewEngine('hbs');

  const config = new DocumentBuilder()
    .setTitle("My app")
    .setDescription("First try with NestJS")
    .build(); 

  const document = SwaggerModule.createDocument(app, config);
  await app.listen(3000);
}
bootstrap();
