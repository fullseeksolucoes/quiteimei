import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { ClerkJwtPayload } from './clerk.strategy';

type RequestWithUser = {
  user: ClerkJwtPayload;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): ClerkJwtPayload => {
    const request = ctx.switchToHttp().getRequest<RequestWithUser>();

    return request.user;
  },
);
