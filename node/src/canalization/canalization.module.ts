import { Module } from '@nestjs/common';
import { CanalizationService } from './canalization.service';
import { CanalizationController } from './canalization.controller';
import { Canalization, CanalizationSchema } from './schemas/canalization.schema';
import { DataTableModule } from './datatable';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeatureAsync([
            {
                name: Canalization.name,
                useFactory: () => {
                    CanalizationSchema.plugin(DataTableModule.init);
                    return CanalizationSchema;
                },
            },
        ]),
    ],
    controllers: [CanalizationController],
    providers: [CanalizationService],
})
export class CanalizationModule {}
