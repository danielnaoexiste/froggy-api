import { Inject } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/schemas/user.schema';
import { IUserService } from 'src/user/user.interface';
import { Done, SERVICES } from './constants';

export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject(SERVICES.USER) private readonly userService: IUserService,
  ) {
    super();
  }

  serializeUser(user: User, done: Done) {
    done(null, user);
  }

  async deserializeUser(user: User, done: Done) {
    try {
      const userDB = await this.userService.findUser(user.discord_id);
      return userDB ? done(null, userDB) : done(null, null);
    } catch (err) {
      return done(err, null);
    }
  }
}
