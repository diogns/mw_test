import { PartialType } from '@nestjs/swagger';
import { CreateGonioDto } from './create-gonio.dto';

export class UpdateGonioDto extends PartialType(CreateGonioDto) {}
