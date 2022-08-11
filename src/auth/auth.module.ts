import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { SERVICES } from 'src/utils/constants';
import { DiscordStrategy } from 'src/utils/DiscordStategy';
import { SessionSerializer } from 'src/utils/SessionSerialzier';
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
