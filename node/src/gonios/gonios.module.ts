// Third party modules
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import Datatable from 'mongoose-datatable/dist/datatable';

// Local modules
// Services
import { GoniosApiService } from './services/gonios.api.service';
import { GoniosStorageService } from './services/gonios.storage.service';

// Controllers
import { GoniosStorageController } from './controller/gonios.storage.controller';
import { GoniosApiController } from './controller/gonios.api.controller';

// Schemas
import { Gonio, GonioSchema } from './schemas/gonio.schema';

@Module({
    imports: [
        MongooseModule.forFeatureAsync([
            {
                name: Gonio.name,
                useFactory: () => {
                    GonioSchema.plugin(Datatable.init);
                    return GonioSchema;
                },
            },
        ]),
    ],
    controllers: [GoniosApiController, GoniosStorageController],
    providers: [GoniosApiService, GoniosStorageService],
})
export class GoniosModule {}
