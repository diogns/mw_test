import { Test, TestingModule } from '@nestjs/testing';
import { AntennasController } from './antennas.controller';
import { AntennasService } from '../services/antennas.service';

describe('AntennasController', () => {
    let controller: AntennasController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AntennasController],
            providers: [AntennasService],
        }).compile();

        controller = module.get<AntennasController>(AntennasController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
