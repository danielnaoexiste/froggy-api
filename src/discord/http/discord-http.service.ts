import { Injectable } from '@nestjs/common';
import { IDiscordHttpService } from './discord-http.interface';

import axios from 'axios';
import { DISCORD_BASE_URL } from 'src/common/constants';

@Injectable()
export class DiscordHttpService implements IDiscordHttpService {
  fetchBotGuilds() {
    const TOKEN = process.env.DISCORD_BOT_TOKEN;
    return axios.get(`${DISCORD_BASE_URL}/users/@me/guilds`, {
      headers: {
        Authorization: `Bot ${TOKEN}`,
      },
    });
  }

  fetchUserGuilds(accessToken: string) {
    return axios.get(`${DISCORD_BASE_URL}/users/@me/guilds`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  fetchGuildChannels(guildId: string) {
    const TOKEN = process.env.DISCORD_BOT_TOKEN;
    return axios.get(`${DISCORD_BASE_URL}/guilds/${guildId}/channels`, {
      headers: {
        Authorization: `Bot ${TOKEN}`,
      },
    });
  }
}
