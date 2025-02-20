import {MiddlewareConsumer, Module, NestModule} from "@nestjs/common";
import {IndexModule} from "./index/index.module";
import {ThrottlerGuard, ThrottlerModule} from "@nestjs/throttler";
import {APP_GUARD} from "@nestjs/core";
import {FrontCorsMiddleware} from "../common/middlewares/cors.front.middleware";

@Module({
    imports: [
        ThrottlerModule.forRoot([
            {
                name: 'short',
                ttl: 1000,
                limit: 2,
            },
        ]),
        IndexModule],
    providers: [
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard,
        },
    ],
})
export class FrontModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(FrontCorsMiddleware).forRoutes('/');
    }
}