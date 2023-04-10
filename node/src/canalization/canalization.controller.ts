import { Controller, Get, Post, Body, Query, Param, Patch, Delete, StreamableFile, Res } from '@nestjs/common';
import { CanalizationService } from './canalization.service';
import { CreateCanalizationDto } from './dto/create-canalization.dto';
import { UpdateCanalizationDto } from './dto/update-canalization.dto';

@Controller('canalization')
export class CanalizationController {
    constructor(private readonly canalizationService: CanalizationService) {}

    @Post()
    create(@Body() createCanalizationDto: CreateCanalizationDto) {
        return this.canalizationService.create(createCanalizationDto);
    }

    @Get()
    findAll() {
        return this.canalizationService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.canalizationService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCanalizationDto: UpdateCanalizationDto) {
        return this.canalizationService.update(+id, updateCanalizationDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.canalizationService.remove(+id);
    }

    // Additional methods for frontend
    @Get('/list/datatable/')
    datatable(@Query() query: any) {
        return this.canalizationService.datatable(query);
    }

    // Additional methods for init collections with base data
    @Post('init/base-data')
    async storageInitBaseData() {
        const data = await this.canalizationService.readExcelFile(4);
        const canalizationsCreated = await this.canalizationService.createMany(data);
        return canalizationsCreated;
    }

    // @Post('update/base-data')
    // async updateBasetData() {
    //     const data = await this.canalizationService.readExcelFile(3);
    //     const canalizationsCreated = await this.canalizationService.createMany(data);
    //     return canalizationsCreated;
    // }
}
