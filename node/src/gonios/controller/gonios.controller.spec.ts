import { Test, TestingModule } from '@nestjs/testing';
import { GoniosApiController as GoniosController } from './gonios.api.controller';
import { GoniosApiService as GoniosService } from '../services/gonios.api.service';

describe('GoniosController', () => {
    let controller: GoniosController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [GoniosController],
            providers: [GoniosService],
        }).compile();

        controller = module.get<GoniosController>(GoniosController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
