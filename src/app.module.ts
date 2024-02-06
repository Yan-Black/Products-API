import {
  Module,
  type MiddlewareConsumer,
  type NestModule,
  type OnModuleInit,
} from "@nestjs/common";
import { MikroORM } from "@mikro-orm/core";
import { MikroOrmMiddleware } from "@mikro-orm/nestjs";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";

import {
  OrmModule,
  AuthModule,
  ProfileModule,
  ProductsModule,
} from "./modules";

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
      }),
    }),
    OrmModule,
    AuthModule,
    ProfileModule,
    ProductsModule,
  ],
})
export class AppModule implements NestModule, OnModuleInit {
  constructor(private readonly orm: MikroORM) {}

  async onModuleInit() {
    await this.orm.getMigrator().up();
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MikroOrmMiddleware).forRoutes("*");
  }
}
