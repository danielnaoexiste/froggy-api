import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';
import { SERVICES } from 'src/utils/constants';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [
    {
      provide: SERVICES.USER,
      useClass: UserService,
    },
  ],
  exports: [
    {
      provide: SERVICES.USER,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
