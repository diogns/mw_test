// DTO = Data Transfer Object
import { IsNotEmpty, Length } from 'class-validator';
export class CreateItemDto {
  @IsNotEmpty()
  @Length(4, 20)
  name: string;

  description: string;

  price: number;
}
