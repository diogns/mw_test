// Third party modules
import { Controller, Get, Post, Body, Query, Param, Delete } from '@nestjs/common';

// Local modules
import { AntennasService } from '../services/antennas.service';
import { AntennasStorageService } from '../services/antennas.storage.service';

import { CreateAntennaBaseDto } from '../dto/create-antenna.dto';

@Controller('antenna')
export class AntennasController {
    constructor(
        private readonly antennasApiService: AntennasService, //
        private readonly antennasStorageService: AntennasStorageService,
    ) {}

    // CRUD - API
    @Post()
    create(@Body() createAntennaDto: CreateAntennaBaseDto) {
        return this.antennasApiService.create(createAntennaDto);
    }

    @Get()
    findAll() {
        return this.antennasApiService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.antennasApiService.findOne(id);
    }

    @Get('/model/:name')
    findOneByName(@Param('name') name: string) {
        return this.antennasApiService.findOneByName(name);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.antennasApiService.remove(+id);
    }

    // Additional methods for frontend
    @Get('/list/datatable/')
    datatable(@Query() query: any) {
        return this.antennasApiService.datatable(query);
    }

    // Additional methods for init collections with base data
    @Post('init/base-data')
    async storageInitData() {
        const data = await this.antennasStorageService.readExcelFile(0);
        const antennasCreated = await this.antennasApiService.createMany(data);
        return antennasCreated;
    }

    @Post('init/additional-data')
    async storageInitAdditionalData() {
        const data = await this.antennasStorageService.processAntennaPatterns();
        return data;
    }
}
