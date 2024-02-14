import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import type { Request } from "express";

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const { user } = ctx.switchToHttp().getRequest<Request>();

    return data ? user?.[data] : user;
  },
);
