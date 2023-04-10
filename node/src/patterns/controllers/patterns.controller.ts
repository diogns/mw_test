// Third party modules
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

// Local modules
import { PatternsService } from '../services/patterns.service';
import { PatternsStorageService } from '../services/patterns.storage.service';

import { CreatePatternDto } from '../dto/create-pattern.dto';
import { UpdatePatternDto } from '../dto/update-pattern.dto';

@Controller('patterns')
export class PatternsController {
    constructor(
        private readonly patternsApiService: PatternsService, //
        private readonly patternsStorageService: PatternsStorageService,
    ) {}

    @Post()
    create(@Body() createPatternDto: CreatePatternDto) {
        return this.patternsApiService.create(createPatternDto);
    }

    @Get()
    findAll() {
        return this.patternsApiService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.patternsApiService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePatternDto: UpdatePatternDto) {
        return this.patternsApiService.update(+id, updatePatternDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.patternsApiService.remove(+id);
    }

    @Post('init')
    async storageInitData() {
        await this.patternsStorageService.readExcelFile();
        return 'ok';
    }
}
