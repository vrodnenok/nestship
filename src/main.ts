import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("My app")
    .setDescription("First try with NestJS")
    .build(); 

  await app.listen(3000);
}
bootstrap();
