// Third party modules
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import Datatable from 'mongoose-datatable/dist/datatable';
import { DataTableModule } from './datatable';

import { LinksService } from './links.service';
import { LinksController } from './links.controller';

// Schemas
import { Link, LinkSchema } from './schemas/links.schema';
import { Gonio, GonioSchema } from '../gonios/schemas/gonio.schema';

@Module({
    imports: [
        MongooseModule.forFeatureAsync([
            {
                name: Link.name,
                useFactory: () => {
                    LinkSchema.plugin(DataTableModule.init);
                    return LinkSchema;
                },
            },
        ]),
        MongooseModule.forFeatureAsync([
            {
                name: Gonio.name,
                useFactory: () => {
                    GonioSchema.plugin(DataTableModule.init);
                    return GonioSchema;
                },
            },
        ]),
    ],
    controllers: [LinksController],
    providers: [LinksService],
})
export class LinksModule {}
