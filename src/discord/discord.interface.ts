export interface IDiscordService {
  getBotGuilds();
  getUserGuilds(accessToken: string);
  getAdminGuilds(accessToken: string);
  getMutualGuilds(accessToken: string);
  getGuildChannels(guildId: string);
}
