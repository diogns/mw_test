// Third party modules
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import Datatable from 'mongoose-datatable/dist/datatable';

// Local modules
// Services
import { AntennasService } from './services/antennas.service';
import { AntennasStorageService } from './services/antennas.storage.service';

// Controllers
import { AntennasController } from './controllers/antennas.controller';

// Schemas
import { Antenna, AntennaSchema } from './schemas/antennas.schema';

@Module({
    imports: [
        MongooseModule.forFeatureAsync([
            {
                name: Antenna.name,
                useFactory: () => {
                    AntennaSchema.plugin(Datatable.init);
                    return AntennaSchema;
                },
            },
        ]),
    ],
    controllers: [AntennasController],
    providers: [AntennasService, AntennasStorageService],
})
export class AntennasModule {}
