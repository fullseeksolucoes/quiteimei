import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { passportJwtSecret } from "jwks-rsa";
import { ExtractJwt, Strategy } from "passport-jwt";

export interface ClerkJwtPayload {
  sub: string;
  email?: string;
  sessionId?: string;
}

@Injectable()
export class ClerkStrategy extends PassportStrategy(Strategy, "clerk") {
  constructor(config: ConfigService) {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: config.getOrThrow<string>("CLERK_JWKS_URL"),
      }),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      issuer: config.getOrThrow<string>("CLERK_ISSUER"),
      algorithms: ["RS256"],
    });
  }

  validate(payload: ClerkJwtPayload): ClerkJwtPayload {
    return payload;
  }
}
