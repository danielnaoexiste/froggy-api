import { Controller, Get, Inject, Param } from '@nestjs/common';
import {
  ApiCookieAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ROUTES, SERVICES } from 'src/common/constants';
import { AuthUser } from 'src/common/decorators';
import { User } from 'src/models/user.schema';
import { IDiscordService } from './discord.interface';

@Controller(ROUTES.DISCORD)
export class DiscordController {
  constructor(
    @Inject(SERVICES.DISCORD) private readonly discordService: IDiscordService,
  ) {}

  @Get('guilds')
  @ApiTags('Discord')
  @ApiCookieAuth()
  @ApiUnauthorizedResponse({ description: 'Invalid Access Token' })
  getMutualGuilds(@AuthUser() user: User) {
    return this.discordService.getGuilds(user.access_token);
  }

  @Get('guilds/bot')
  @ApiTags('Discord')
  @ApiCookieAuth()
  @ApiOkResponse({ description: 'Returns all bot guilds' })
  @ApiUnauthorizedResponse({ description: 'Invalid Access Token' })
  getBotGuilds() {
    return this.discordService.getBotGuilds();
  }

  @Get('guilds/user')
  @ApiTags('Discord')
  @ApiCookieAuth()
  @ApiUnauthorizedResponse({ description: 'Invalid Access Token' })
  getUserGuilds(@AuthUser() user: User) {
    return this.discordService.getUserGuilds(user.access_token);
  }

  @Get('guilds/:guildId/channels')
  @ApiTags('Discord')
  @ApiCookieAuth()
  @ApiUnauthorizedResponse({ description: 'Invalid Access Token' })
  async getGuildChannels(@Param('guildId') guildId: string) {
    const { data } = await this.discordService.getGuildChannels(guildId);
    return data.filter((channel) => channel.type === 0);
  }
}
