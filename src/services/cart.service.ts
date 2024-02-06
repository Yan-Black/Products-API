import { Injectable, NotFoundException } from "@nestjs/common";
import { EntityManager } from "@mikro-orm/core";
import { InjectRepository } from "@mikro-orm/nestjs";
import { EntityRepository } from "@mikro-orm/postgresql";
import { Cart, User } from "src/entities";

@Injectable()
class CartService {
  constructor(
    private readonly em: EntityManager,

    @InjectRepository(Cart)
    private readonly cartRepository: EntityRepository<Cart>,

    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}

  async findOne(userId: string) {
    const cart = await this.cartRepository.findOne({ user: userId });

    if (!cart) {
      const user = await this.userRepository.findOne({ id: userId });

      if (!user) {
        throw new NotFoundException(
          `user with id: ${userId} not found or it not exists`,
        );
      }

      return this.cartRepository.create({ user, isDeleted: false });
    }

    return cart;
  }

  async update(userId: string) {
    return userId;
  }

  async delete(userId: string) {
    global.console.log(userId);
    return;
  }
}

export { CartService };
