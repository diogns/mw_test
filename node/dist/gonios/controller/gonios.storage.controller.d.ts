import { GoniosStorageService } from '../services/gonios.storage.service';
import { GoniosApiService } from '../services/gonios.api.service';
export declare class GoniosStorageController {
    private readonly goniosStorageService;
    private readonly goniosApiService;
    constructor(goniosStorageService: GoniosStorageService, goniosApiService: GoniosApiService);
    create(): Promise<any[]>;
}
