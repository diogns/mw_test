// Third party modules
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Local modules
// Services
import { PatternsService } from './services/patterns.service';
import { PatternsStorageService } from './services/patterns.storage.service';

// Controllers
import { PatternsController } from './controllers/patterns.controller';

// Schemas
import { Pattern, PatternSchema } from './schemas/patterns.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Pattern.name,
                schema: PatternSchema,
            },
        ]),
    ],
    controllers: [PatternsController],
    providers: [PatternsService, PatternsStorageService],
})
export class PatternsModule {}
