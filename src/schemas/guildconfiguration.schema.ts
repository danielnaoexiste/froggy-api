import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class GuildConfig {
  @Prop({ required: true, unique: true })
  guild_id: string;

  @Prop({ default: null })
  penalties_channel_id: string;

  @Prop({ default: null })
  reports_channel_id: string;

  @Prop({ default: null })
  welcome_channel_id: string;
}

export const GuildConfigSchema = SchemaFactory.createForClass(GuildConfig);
