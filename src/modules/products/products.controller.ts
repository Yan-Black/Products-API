import { Controller, Get, Param } from "@nestjs/common";

import { ProductsService } from "src/services";

@Controller("products")
class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts() {
    return this.productsService.findAll();
  }

  @Get()
  async getProduct(@Param(":productId") productId: string) {
    return this.productsService.findOne(productId);
  }
}

export { ProductsController };
