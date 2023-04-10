import { Controller, Get, Post, Body, Query, Param, Delete, StreamableFile, Res } from '@nestjs/common';
import type { Response } from 'express';

import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';

@Controller('link')
export class LinksController {
    constructor(private readonly linksService: LinksService) {}

    // CRUD - API
    @Post()
    create(@Body() createLinkDto: CreateLinkDto) {
        return this.linksService.create(createLinkDto);
    }

    @Get()
    findAll() {
        return this.linksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.linksService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.linksService.remove(+id);
    }

    // Additional methods for init collections with base data
    @Post('init/base-data')
    async storageInitBaseData() {
        const data = await this.linksService.readExcelFile(3);
        const linksCreated = await this.linksService.createMany(data);
        return linksCreated;
    }

    @Post('update/base-data')
    async updateBasetData() {
        const data = await this.linksService.readExcelFileUpdate(6);
        //console.log(data.slice(1, 10));
        //const linksCreated = await this.linksService.createMany(data);
        return 'linksCreated';
    }

    // Additional methods for frontend
    @Get('/list/datatable/')
    datatable(@Query() query: any) {
        return this.linksService.datatable(query);
    }

    // docs
    // By ID
    @Get('/docx/id/:id')
    async docxById(@Param('id') id: string, @Res() res: Response) {
        const { buf, fileName } = await this.linksService.getDocById(id);
        res.set({
            'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'Content-Disposition': `"attachment; filename=${fileName}"`,
        });
        res.send(buf);
    }

    @Get('/pdf/id/:id')
    async pdfById(@Param('id') id: string, @Res() res: Response) {
        const { buf, fileName } = await this.linksService.getPdfById(id);
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `"attachment; filename=${fileName}"`,
        });
        res.send(buf);
    }

    @Get('/xlsx/id/:id')
    async xlsxById(@Param('id') id: string, @Res() res: Response) {
        const { buf, fileName } = await this.linksService.getXlsxById(id);
        res.set({
            'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'Content-Disposition': `"attachment; filename=${fileName}"`,
        });
        res.send(buf);
    }

    // All report
    @Get('/docx/report/')
    async docxReport() {
        const { buf, fileName } = await this.linksService.getDocReport();

        return 'docxReport';
    }
}
