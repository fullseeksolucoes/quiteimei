import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import type { User } from '@prisma/client';
import { UsersService, type UserProfile } from './users.service';
import { ClerkAuthGuard } from '../auth/clerk.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { ClerkJwtPayload } from '../auth/clerk.strategy';

@ApiTags('users')
@ApiBearerAuth('clerk-jwt')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @UseGuards(ClerkAuthGuard)
  @ApiOkResponse({
    description: 'Usuário sincronizado com o banco a partir do token Clerk.',
  })
  async getCurrentUser(@CurrentUser() user: ClerkJwtPayload): Promise<User> {
    const dbUser = await this.usersService.upsertUser(
      user.sub,
      user.email || '',
    );
    return dbUser;
  }

  @Get('profile')
  @UseGuards(ClerkAuthGuard)
  @ApiOkResponse({
    description:
      'Perfil do usuário autenticado com dados da empresa vinculada.',
  })
  async getUserProfile(
    @CurrentUser() user: ClerkJwtPayload,
  ): Promise<UserProfile | null> {
    return this.usersService.getUser(user.sub);
  }
}
