/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose" />
/// <reference types="mongoose-paginate" />
/// <reference types="mongoose" />
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    create(createItemDto: CreateItemDto): Promise<import("./schemas/items.schema").Items & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("./schemas/items.schema").Items & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): string;
    update(id: string, updateItemDto: UpdateItemDto): string;
    remove(id: string): string;
}
