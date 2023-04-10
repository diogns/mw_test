import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GoniosApiService } from '../services/gonios.api.service';
import { CreateGonioDto } from '../dto/create-gonio.dto';
import { UpdateGonioDto } from '../dto/update-gonio.dto';

@Controller('gonios')
export class GoniosApiController {
    constructor(private readonly goniosApiService: GoniosApiService) {}

    @Post()
    create(@Body() createGonioDto: CreateGonioDto) {
        return this.goniosApiService.create(createGonioDto);
    }

    @Get()
    findAll(@Query() query) {
        console.log('query', query);
        return this.goniosApiService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.goniosApiService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateGonioDto: UpdateGonioDto) {
        return this.goniosApiService.update(+id, updateGonioDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.goniosApiService.remove(+id);
    }
}
