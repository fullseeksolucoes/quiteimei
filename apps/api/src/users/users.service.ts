import { Injectable } from '@nestjs/common';
import { PrismaClient, type Prisma, type User } from '@prisma/client';

export type UserProfile = Prisma.UserGetPayload<{
  include: { company: true };
}>;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaClient) {}

  async upsertUser(clerkId: string, email: string): Promise<User> {
    return await this.prisma.user.upsert({
      where: { id: clerkId },
      update: { email },
      create: {
        id: clerkId,
        email,
      },
    });
  }

  async getUser(clerkId: string): Promise<UserProfile | null> {
    return await this.prisma.user.findUnique({
      where: { id: clerkId },
      include: { company: true },
    });
  }
}
