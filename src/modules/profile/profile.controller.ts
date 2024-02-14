import {
  Controller,
  Get,
  Put,
  Delete,
  Post,
  HttpCode,
  Body,
  HttpStatus,
} from "@nestjs/common";

import { CartService } from "src/services";
import { Roles, User } from "src/decorators";
import { CreateOrderDTO } from "./dto";
import { Role } from "../users/constants";

@Controller("profile")
class ProfileController {
  constructor(private readonly cartService: CartService) {}

  @Get("cart")
  async getCart(@User("id") id: string) {
    return this.cartService.findOne(id);
  }

  @Put("cart")
  async updateCart(@User("id") id: string) {
    return this.cartService.update(id);
  }

  @Delete("cart")
  @HttpCode(HttpStatus.NO_CONTENT)
  @Roles(Role.Admin)
  async deleteCart(@User("id") id: string) {
    await this.cartService.delete(id);

    return {
      success: true,
    };
  }

  @Post("cart/checkout")
  @HttpCode(HttpStatus.CREATED)
  async createOrder(
    @User("id") id: string,
    @Body() createOrderDTO: CreateOrderDTO,
  ) {
    return createOrderDTO;
  }
}

export { ProfileController };
