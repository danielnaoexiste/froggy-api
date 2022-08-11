import { User } from 'src/schemas/user.schema';
import { UserDetails } from 'src/utils/constants';

export interface IAuthService {
  validateUser(details: UserDetails): Promise<User>;
}
