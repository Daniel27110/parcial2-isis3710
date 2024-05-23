import { Test, TestingModule } from '@nestjs/testing';
import { PropuestaService } from './propuesta.service';

describe('PropuestaService', () => {
  let service: PropuestaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropuestaService],
    }).compile();

    service = module.get<PropuestaService>(PropuestaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
