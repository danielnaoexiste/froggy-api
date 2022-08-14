import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ROUTES, SERVICES } from 'src/common/constants';
import { AuthUser } from 'src/common/decorators';
import { User } from 'src/models/user.schema';
import { IDiscordService } from './discord.interface';

@Controller(ROUTES.DISCORD)
export class DiscordController {
  constructor(
    @Inject(SERVICES.DISCORD) private readonly discordService: IDiscordService,
  ) {}

  @Get('guilds/admin')
  getAdminGuilds(@AuthUser() user: User) {
    return this.discordService.getAdminGuilds(user.access_token);
  }

  @Get('guilds/mutual')
  getMutualGuilds(@AuthUser() user: User) {
    return this.discordService.getMutualGuilds(user.access_token);
  }

  @Get('guilds/bot')
  getBotGuilds() {
    return this.discordService.getBotGuilds();
  }

  @Get('guilds/user')
  getUserGuilds(@AuthUser() user: User) {
    return this.discordService.getUserGuilds(user.access_token);
  }

  @Get('guilds/:guildId/channels')
  async getGuildChannels(@Param('guildId') guildId: string) {
    const { data } = await this.discordService.getGuildChannels(guildId);
    return data.filter((channel) => channel.type === 0);
  }
}
