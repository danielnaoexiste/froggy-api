import { User } from 'src/schemas/user.schema';

export enum ROUTES {
  AUTH = 'auth',
}

export enum SERVICES {
  AUTH = 'AUTH_SERVICE',
  USER = 'USER_SERVICE',
}

export const scopes = ['identify', 'email', 'guilds'];

export type UserDetails = {
  discord_id: string;
};

export type Done = (err: Error, user: User) => void;
