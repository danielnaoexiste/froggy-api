export enum ROUTES {
  AUTH = 'auth',
  DISCORD = 'discord',
}

export enum SERVICES {
  AUTH = 'AUTH_SERVICE',
  USER = 'USER_SERVICE',
  DISCORD = 'DISCORD_SERVICE',
  DISCORD_HTTP = 'DISCORD_HTTP_SERVICE',
}

export enum PERMISSIONS {
  ADMIN = 0x8,
}

export const scopes = ['identify', 'email', 'guilds'];
export const DISCORD_BASE_URL = 'https://discord.com/api/v10';
