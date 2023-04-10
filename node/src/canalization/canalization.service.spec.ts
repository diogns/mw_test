import { Test, TestingModule } from '@nestjs/testing';
import { CanalizationService } from './canalization.service';

describe('CanalizationService', () => {
  let service: CanalizationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CanalizationService],
    }).compile();

    service = module.get<CanalizationService>(CanalizationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
