import { IsEmail, IsNotEmpty, IsEnum } from "class-validator";

import { Role } from "../constants";

export class CreateUserDTO {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;

  @IsEnum(Role)
  @IsNotEmpty()
  readonly role: Role;
}
