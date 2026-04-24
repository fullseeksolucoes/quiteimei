import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SkipThrottle } from '@nestjs/throttler';

@ApiTags('health')
@SkipThrottle()
@Controller('health')
export class HealthController {
  @Get()
  @ApiOkResponse({
    description: 'A API está disponível.',
    schema: {
      example: {
        status: 'ok',
        timestamp: '2026-04-24T21:00:00.000Z',
      },
    },
  })
  check() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
