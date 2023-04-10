import { PartialType } from '@nestjs/swagger';
import { CreateCanalizationDto } from './create-canalization.dto';

export class UpdateCanalizationDto extends PartialType(CreateCanalizationDto) {}
