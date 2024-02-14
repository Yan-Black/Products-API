import { IsNotEmpty, IsEmail } from "class-validator";

export class SignInDTO {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
