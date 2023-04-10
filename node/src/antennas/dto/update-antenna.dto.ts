import { PartialType } from '@nestjs/swagger';
import { CreateAntennaBaseDto } from './create-antenna.dto';

export class UpdateAntennaDto extends PartialType(CreateAntennaBaseDto) {}
