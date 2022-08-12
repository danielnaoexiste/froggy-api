import { User } from 'src/schemas/user.schema';
import { UpdateUserDetails, UserDetails } from 'src/utils/constants';

export interface IUserService {
  findUser(discordId: string);
  createUser(details: UserDetails);
  updateUser(user: User, details: UpdateUserDetails);
}
