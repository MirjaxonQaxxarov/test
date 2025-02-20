import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as session from 'express-session';
import * as nunjucks from 'nunjucks';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.useStaticAssets(join(__dirname, '..', 'public'));

    const viewsDir = join(__dirname, '..', 'views');
    nunjucks.configure(viewsDir, {
        express: app.getHttpAdapter().getInstance(),
        autoescape: true,
        noCache: process.env.NODE_ENV !== 'production',
    });

    app.setBaseViewsDir(viewsDir);
    app.setViewEngine('njk');
    app.use(
        session({
            secret: process.env.SESSION_SECRET || 'error404NotFound',
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                secure: false,
                maxAge: 3600000,
            },
        }),
    );

    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));

    await app.listen(process.env.PORT ?? 3000);
}

bootstrap();