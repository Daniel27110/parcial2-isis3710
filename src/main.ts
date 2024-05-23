import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'api/v',
    defaultVersion: '1',
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();


// TLDR CLI COMMANDS FOR NESTJS

// 1. Crear un nuevo moduslo

// nest g module NAME

// 2. Crear un nuevo modulo

// nest g cl NAME/NAME.entity --no-spec

// 3. Crear un nuevo servicio

// nest g s NAME

// 4. Crear un nuevo controlador

// nest g co NAME --no-spec

// 5. Crear un nuevo DTO

// nest g cl NAME/NAME.dto --no-spec
