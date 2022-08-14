import { Inject, Injectable } from '@nestjs/common';
import { SERVICES } from 'src/common/constants';
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

  async getMutualGuilds(accessToken: string) {
    const userGuilds = await this.getUserGuilds(accessToken);
    const botGuilds = await this.getBotGuilds();

    const mutualGuilds = userGuilds.filter((guild) =>
      botGuilds.some((botGuild) => botGuild.id === guild.id),
    );

    return mutualGuilds;
  }

  getGuildChannels(guildId: string) {
    return this.discordHttpService.fetchGuildChannels(guildId);
  }
}
