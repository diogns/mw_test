import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemsDocument = Items & Document;

@Schema()
export class Items {
  @Prop({ default: 'item1' })
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;
}

export const ItemsSchema = SchemaFactory.createForClass(Items);
