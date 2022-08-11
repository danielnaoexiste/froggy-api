import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  discord_id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
