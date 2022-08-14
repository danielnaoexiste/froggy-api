import { User } from 'src/models/user.schema';
import { IUserDetails } from 'src/common/interfaces';

export interface IAuthService {
  validateUser(details: IUserDetails): Promise<User>;
}
