import { Test, TestingModule } from '@nestjs/testing';
import { CanalizationController } from './canalization.controller';
import { CanalizationService } from './canalization.service';

describe('CanalizationController', () => {
  let controller: CanalizationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CanalizationController],
      providers: [CanalizationService],
    }).compile();

    controller = module.get<CanalizationController>(CanalizationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
