import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  // Mostrar puerto en arranque para facilitar debugging
  console.log(`Nest application listening on: http://localhost:${port}`);
}
bootstrap();
