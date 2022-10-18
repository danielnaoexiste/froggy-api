import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from 'src/user/user.interface';
import { SERVICES } from 'src/common/constants';
import { IUserDetails } from 'src/common/interfaces';

@Injectable()
export class AuthService {
  constructor(
    @Inject(SERVICES.USER) private readonly userService: IUserService,
  ) {}

  async validateUser(details: IUserDetails) {
    const user = await this.userService.findUser(details.discord_id);

    if (user) {
      const { discord_id: _, ...updatedDetails } = details;

      const updatedUser = await this.userService.updateUser(
        user,
        updatedDetails,
      );

      return updatedUser;
    }

    const newUser = await this.userService.createUser(details);
    return newUser;
  }
}
