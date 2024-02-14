import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@mikro-orm/nestjs";
import { EntityRepository } from "@mikro-orm/postgresql";

import { User } from "../entities";
import { CreateUserDTO } from "../modules/users/dto";

@Injectable()
class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: EntityRepository<User>,
  ) {}

  async findOneByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });

    if (!user) {
      throw new NotFoundException(`user with id: ${user} not found`);
    }

    return user;
  }

  async findAll() {
    return this.usersRepository.findAll();
  }

  async create(createUserDto: CreateUserDTO) {
    return this.usersRepository.create(createUserDto);
  }
}

export { UsersService };
