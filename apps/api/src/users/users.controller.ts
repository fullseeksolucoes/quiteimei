import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ClerkAuthGuard } from '../auth/clerk.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { ClerkJwtPayload } from '../auth/clerk.strategy';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @UseGuards(ClerkAuthGuard)
  async getCurrentUser(@CurrentUser() user: ClerkJwtPayload) {
    // Sincroniza ou cria o usuário no banco
    const dbUser = await this.usersService.upsertUser(
      user.sub,
      user.email || '',
    );
    return dbUser;
  }

  @Get('profile')
  @UseGuards(ClerkAuthGuard)
  async getUserProfile(@CurrentUser() user: ClerkJwtPayload) {
    return this.usersService.getUser(user.sub);
  }
}
