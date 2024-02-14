import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@mikro-orm/nestjs";
import { EntityRepository } from "@mikro-orm/postgresql";

import { Product } from "src/entities";

@Injectable()
class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: EntityRepository<Product>,
  ) {}

  async findOne(productId: string) {
    const product = await this.productsRepository.findOne({ id: productId });

    if (!product) {
      throw new NotFoundException(`product with id: ${productId} not found`);
    }

    return product;
  }

  async findAll() {
    return this.productsRepository.findAll();
  }
}

export { ProductsService };
