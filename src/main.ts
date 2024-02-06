import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";

import { AppModule } from "./app.module";

const port = process.env.APP_PORT ?? 3000;

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bodyParser: true,
  });

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix("api");

  await app.listen(port);
};

bootstrap().catch(globalThis.console.error);
