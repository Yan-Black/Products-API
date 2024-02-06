import { Module } from "@nestjs/common";
import { MikroOrmModule } from "@mikro-orm/nestjs";

import { Cart, CartItem, Order, User } from "src/entities";
import { CartService } from "src/services";
import { ProfileController } from "./profile.controller";

@Module({
  imports: [MikroOrmModule.forFeature([Cart, CartItem, User, Order])],
  controllers: [ProfileController],
  providers: [CartService],
})
export class ProfileModule {}
