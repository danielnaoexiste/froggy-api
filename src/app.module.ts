import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {
  GuildConfig,
  GuildConfigSchema,
} from './schemas/guildconfiguration.schema';
import { User, UserSchema } from './schemas/user.schema';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
