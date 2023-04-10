import { Test, TestingModule } from '@nestjs/testing';
import { GoniosApiService as GoniosService } from './gonios.api.service';

describe('GoniosService', () => {
    let service: GoniosService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [GoniosService],
        }).compile();

        service = module.get<GoniosService>(GoniosService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
