import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  GuildConfig,
  GuildConfigSchema,
} from './models/guild-configuration.schema';
import { User, UserSchema } from './models/user.schema';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DiscordModule } from './discord/discord.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: GuildConfig.name, schema: GuildConfigSchema },
    ]),
    AuthModule,
    UserModule,
    DiscordModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
