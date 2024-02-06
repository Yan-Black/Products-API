import { Controller, Body, Post, HttpCode, HttpStatus } from "@nestjs/common";

import { Public } from "src/decorators";
import { AuthService } from "src/services";
import { SignInDTO } from "./dto";
import { CreateUserDTO } from "../users/dto";

@Public()
@Controller()
class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() signInDto: SignInDTO) {
    const token = await this.authService.signIn(signInDto);

    return {
      access_token: token,
    };
  }

  @Post("register")
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() createUserDto: CreateUserDTO) {
    return this.authService.register(createUserDto);
  }
}

export { AuthController };
