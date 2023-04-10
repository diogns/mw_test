import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GoniosStorageService } from '../services/gonios.storage.service';
import { GoniosApiService } from '../services/gonios.api.service';
import { CreateGonioDto } from '../dto/create-gonio.dto';

@Controller('gonios/storage')
export class GoniosStorageController {
    constructor(
        private readonly goniosStorageService: GoniosStorageService, //
        private readonly goniosApiService: GoniosApiService,
    ) {}

    @Post('excel')
    async create() {
        await this.goniosStorageService.readExcelFile();
        const data = this.goniosStorageService.completeValuesFromBaseData();
        const goniosToReturn = [];
        for (const gonio of data) {
            try {
                const gonioItem = await this.goniosApiService.create(gonio);
                goniosToReturn.push(gonioItem);
            } catch (err) {
                console.log(gonio);
                console.log(err.message);
            }
        }
        return goniosToReturn;
    }
}
