import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  await app.listen(process.env.HTTP_PORT)
  .then(() => 
    console.log(`HTTP Server is listening on port ${process.env.HTTP_PORT}...`, 'Bootstrap'),
  );
}
bootstrap();
