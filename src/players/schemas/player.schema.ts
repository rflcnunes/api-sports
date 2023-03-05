import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PlayerDocument = HydratedDocument<Player>;

@Schema({ timestamps: true })
export class Player {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  ranking: string;

  @Prop()
  position: number;

  @Prop()
  urlPhotoPlayer: string;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
