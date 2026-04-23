import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import type { ClerkJwtPayload } from "./clerk.strategy";

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): ClerkJwtPayload => {
    const request = ctx.switchToHttp().getRequest<{ user: ClerkJwtPayload }>();
    return request.user;
  },
);
