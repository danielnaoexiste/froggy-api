import { User } from 'src/models/user.schema';
import { IUpdateUserDetails, IUserDetails } from 'src/common/interfaces';

export interface IUserService {
  findUser(discordId: string);
  createUser(details: IUserDetails);
  updateUser(user: User, details: IUpdateUserDetails);
}
