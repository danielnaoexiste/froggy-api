import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { SERVICES } from 'src/common/constants';
import { DiscordStrategy } from 'src/auth/discord.strategy';
import { SessionSerializer } from './serializers/session.serializer';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [
    DiscordStrategy,
    SessionSerializer,
    {
      provide: SERVICES.AUTH,
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
