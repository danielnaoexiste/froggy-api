import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000 * 60 * 24,
      },
    }),
  );

  app.enableCors({
    origin: [process.env.DASHBOARD_BASE_URL],
    credentials: true,
  });
  app.use(passport.initialize());
  app.use(passport.session());

  try {
    await app.listen(process.env.PORT);
    console.log(`Listening on PORT ${process.env.PORT}`);
  } catch (e) {
    console.error(e);
  }
}
bootstrap();
