import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OperationsModule } from './operations/operations.module';
import { LinksModule } from './links/links.module';
import { CanalizationModule } from './canalization/canalization.module';
import { AntennasModule } from './antennas/antennas.module';
import { GoniosModule } from './gonios/gonios.module';
import { PatternsModule } from './patterns/patterns.module';
import { CalculationsModule } from './calculations/calculations.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
    imports: [
        MongooseModule.forRoot('mongodb://coverage_microwave_mongo/coverage_db', {}),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'client'),
            serveRoot: '/mw/api/client',
        }),
        OperationsModule,
        LinksModule,
        CanalizationModule,
        AntennasModule,
        GoniosModule,
        PatternsModule,
        CalculationsModule,
    ],
})
export class AppModule {}
