import { Module } from '@nestjs/common';
import { SERVICES } from 'src/common/constants';
import { DiscordController } from './discord.controller';
import { DiscordService } from './discord.service';
import { DiscordHttpService } from './http';

@Module({
  controllers: [DiscordController],
  providers: [
    {
      provide: SERVICES.DISCORD,
      useClass: DiscordService,
    },
    {
      provide: SERVICES.DISCORD_HTTP,
      useClass: DiscordHttpService,
    },
  ],
})
export class DiscordModule {}
