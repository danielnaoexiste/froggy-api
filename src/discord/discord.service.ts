import { Inject, Injectable } from '@nestjs/common';
import { PERMISSIONS, SERVICES } from 'src/common/constants';
import { IDiscordService } from './discord.interface';
import { IDiscordHttpService } from './http';

@Injectable()
export class DiscordService implements IDiscordService {
  constructor(
    @Inject(SERVICES.DISCORD_HTTP)
    private readonly discordHttpService: IDiscordHttpService,
  ) {}

  async getBotGuilds() {
    const { data } = await this.discordHttpService.fetchBotGuilds();
    return data;
  }

  async getUserGuilds(accessToken: string) {
    const { data } = await this.discordHttpService.fetchUserGuilds(accessToken);
    return data;
  }

  async getGuilds(accessToken: string) {
    const userGuilds = await this.getUserGuilds(accessToken);
    const botGuilds = await this.getBotGuilds();

    const mutualGuilds = userGuilds.filter((guild) =>
      botGuilds.some((botGuild) => botGuild.id === guild.id),
    );

    const adminGuilds = userGuilds.filter(
      ({ permissions }) => (parseInt(permissions) & PERMISSIONS.ADMIN) === 8,
    );

    return { mutualGuilds, adminGuilds };
  }

  getGuildChannels(guildId: string) {
    return this.discordHttpService.fetchGuildChannels(guildId);
  }
}
