import { User } from 'src/models/user.schema';

export interface IDone {
  (err: Error, user: User): void;
}
