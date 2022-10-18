import { Inject } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { SERVICES } from 'src/common/constants';
import { IDone } from 'src/common/interfaces';
import { User } from 'src/models/user.schema';
import { IUserService } from 'src/user/user.interface';

export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject(SERVICES.USER) private readonly userService: IUserService,
  ) {
    super();
  }

  serializeUser(user: User, done: IDone) {
    done(null, user);
  }

  async deserializeUser(user: User, done: IDone) {
    try {
      const userDB = await this.userService.findUser(user.discord_id);
      return userDB ? done(null, userDB) : done(null, null);
    } catch (err) {
      return done(err, null);
    }
  }
}
