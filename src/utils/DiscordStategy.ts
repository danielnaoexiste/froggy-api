import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-discord';
import { IAuthService } from 'src/auth/auth.interface';
import { scopes, SERVICES } from './constants';

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(SERVICES.AUTH) private readonly authService: IAuthService,
  ) {
    super({
      clientID: process.env.DISCORD_APP_ID,
      clientSecret: process.env.DISCORD_SECRET,
      callbackURL: process.env.DISCORD_REDIRECT_URL,
      scope: scopes,
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log('DiscordStrategy Validate');

    return this.authService.validateUser({
      discord_id: profile.id,
      username: profile.username,
      discriminator: profile.discriminator,
      access_token: accessToken,
      refresh_token: refreshToken,
    });
  }
}
