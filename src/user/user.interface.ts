import { UserDetails } from 'src/utils/constants';

export interface IUserService {
  createUser(details: UserDetails);
  findUser(discordId: string);
}
