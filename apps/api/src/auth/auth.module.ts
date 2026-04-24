import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ClerkStrategy } from './clerk.strategy';

@Module({
  imports: [PassportModule],
  providers: [ClerkStrategy],
  exports: [ClerkStrategy],
})
export class AuthModule {}
