import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaClient) {}

  async upsertUser(clerkId: string, email: string) {
    return this.prisma.user.upsert({
      where: { id: clerkId },
      update: { email },
      create: {
        id: clerkId,
        email,
      },
    });
  }

  async getUser(clerkId: string) {
    return this.prisma.user.findUnique({
      where: { id: clerkId },
      include: { company: true },
    });
  }
}
