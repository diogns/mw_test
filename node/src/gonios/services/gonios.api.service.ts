import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateGonioDto } from '../dto/create-gonio.dto';
import { UpdateGonioDto } from '../dto/update-gonio.dto';
import { Gonio, GonioDocument } from '../schemas/gonio.schema';
import { Model } from 'mongoose';

@Injectable()
export class GoniosApiService {
    constructor(@InjectModel(Gonio.name) private gonioModule: Model<GonioDocument>) {}

    async create(createGonioDto: CreateGonioDto) {
        const gonioCreated = await this.gonioModule.create(createGonioDto);
        return gonioCreated;
    }

    async findAll(query: any) {
        query.start = parseInt(query.start, 10) / parseInt(query.length, 10);
        const data = await this.gonioModule['dataTable'](query);
        return data;
    }

    findOne(id: number) {
        return `This action returns a #${id} gonio`;
    }

    update(id: number, updateGonioDto: UpdateGonioDto) {
        return `This action updates a #${id} gonio`;
    }

    remove(id: number) {
        return `This action removes a #${id} gonio`;
    }
}
