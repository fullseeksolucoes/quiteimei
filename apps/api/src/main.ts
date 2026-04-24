import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';

function getAllowedOrigins() {
  return (
    process.env.CORS_ORIGINS ??
    process.env.WEB_URL ??
    'http://localhost:3000'
  )
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function isApiDocumentationEnabled() {
  return (
    process.env.API_DOCS_ENABLED === 'true' ||
    process.env.NODE_ENV !== 'production'
  );
}

function configureOpenApi(app: INestApplication) {
  if (!isApiDocumentationEnabled()) {
    return;
  }

  const config = new DocumentBuilder()
    .setTitle('MeiControl API')
    .setDescription('API para gestão fiscal de MEI e ME no MeiControl.')
    .setVersion('0.0.1')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Token JWT emitido pelo Clerk.',
      },
      'clerk-jwt',
    )
    .addTag('health', 'Status operacional da API')
    .addTag('users', 'Usuários autenticados pelo Clerk')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document, {
    customSiteTitle: 'MeiControl API Docs',
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const apiDocumentationEnabled = isApiDocumentationEnabled();

  app.use(
    helmet({
      contentSecurityPolicy: apiDocumentationEnabled ? false : undefined,
    }),
  );
  app.enableShutdownHooks();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.enableCors({
    origin: getAllowedOrigins(),
    credentials: true,
  });

  configureOpenApi(app);

  await app.listen(process.env.PORT ?? 3001);
}
void bootstrap();
