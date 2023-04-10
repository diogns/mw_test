import { Schema } from 'mongoose';
interface ILogger {
    debug: (...data: any) => void;
    warn: (...data: any) => void;
}
export interface ISearch {
    value: any;
    regex?: boolean;
    chunks?: string[];
}
export interface IColumn {
    data: string;
    name?: string;
    searchable?: boolean;
    orderable?: boolean;
    search?: ISearch;
}
interface IOrder {
    column: number;
    dir: string;
}
export interface IQuery {
    draw: string;
    columns: IColumn[];
    order?: IOrder[];
    start: string | number;
    length: string | number;
    search?: ISearch;
    groupBy?: string[];
}
export type HandlerType = (query: IQuery, column: IColumn, field: any, search: ISearch, global: boolean) => any;
export interface IOptions {
    logger?: ILogger;
    handlers?: {
        [type: string]: HandlerType;
    };
    conditions?: any;
    select?: any;
    disableCount?: boolean;
}
export interface IData {
    draw: string;
    recordsTotal: number;
    recordsFiltered: number;
    data: any[];
}
export interface IConfig {
    logger?: ILogger;
    handlers?: {
        [type: string]: HandlerType;
    };
}
export declare class DataTableModule {
    private schema;
    static CONFIG: IConfig;
    private _config;
    private get config();
    private get logger();
    private model;
    static configure(config?: IConfig): IConfig;
    static init(schema: any, config?: IConfig): void;
    constructor(schema: Schema);
    private buildSort;
    private updateAggregateOptions;
    private getModel;
    private fetchFieldRef;
    private fetchFieldArrayRef;
    private fetchField;
    private getField;
    private addProjection;
    private addSearch;
    private getSearch;
    private getChunkSearch;
    private buildColumnSearchObjectId;
    private buildColumnSearch;
    private tryDeductMixedFromValue;
    private buildGlobalColumnSearchString;
    private buildColumnSearchString;
    private buildColumnSearchBoolean;
    private buildGlobalColumnSearchNumber;
    private buildColumnSearchNumber;
    private buildColumnSearchDate;
    private parseNumber;
    private pagination;
    private isTrue;
    private isFalse;
    private isSelectable;
    private recordsTotal;
    private recordsFiltered;
    private data;
    private buildGroupBy;
    private debug;
    private warn;
    private dataTable;
}
export {};
