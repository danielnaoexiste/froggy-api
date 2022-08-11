import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from 'src/user/user.interface';
import { SERVICES, UserDetails } from 'src/utils/constants';

@Injectable()
export class AuthService {
  constructor(
    @Inject(SERVICES.USER) private readonly userService: IUserService,
  ) {}

  async validateUser(details: UserDetails) {
    const user = await this.userService.findUser(details.discord_id);
    console.log(user, details);

    if (user) return user;

    const newUser = await this.userService.createUser(details);
    return newUser;
  }
}
