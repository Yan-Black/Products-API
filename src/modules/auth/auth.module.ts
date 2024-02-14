import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { JwtModule } from "@nestjs/jwt";

import { AuthService } from "src/services";
import { AuthController } from "./auth.controller";
import { AuthGuard } from "./auth.guard";
import { RBACGuard } from "./rbac.guard";
import { jwtConstants } from "./constants";
import { UsersModule } from "../users";

@Module({
  controllers: [AuthController],

  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "1h" },
    }),
    UsersModule,
  ],

  providers: [
    AuthService,
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: RBACGuard },
  ],

  exports: [AuthService],
})
export class AuthModule {}
