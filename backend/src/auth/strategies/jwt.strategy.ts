import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
	constructor(private readonly config: ConfigService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: config.get<string>('JWT_ACCESS_SECRET'),
		});
	}

	async validate(payload: any) {
		return { userName: payload.sub, tfa: payload.tfaCheck };
	}
}

/* JWT strategy options
*
* `jwtFromRequest` (REQUIRED) Function that accepts a request as the only
  parameter and returns either the JWT as a string or *null*.
* `secretOrKey` is a string or buffer containing the secret (symmetric) or
  PEM-encoded public key (asymmetric) for verifying the token's signature.
  REQUIRED unless `secretOrKeyProvider` is provided.
*/
