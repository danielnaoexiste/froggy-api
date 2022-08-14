import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  discord_id: string;

  @Prop({ default: null })
  access_token: string;

  @Prop({ default: null })
  refresh_token: string;

  @Prop()
  username: string;

  @Prop()
  discriminator: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
