import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import type { Request } from "express";

import { ROLES_KEY, Role } from "../users/constants";

@Injectable()
export class RBACGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!roles.length) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest<Request>();

    return user ? roles.includes(user?.role) : false;
  }
}
