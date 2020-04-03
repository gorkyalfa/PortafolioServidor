import { Test, TestingModule } from '@nestjs/testing';
import { DescripcionesService } from './descripciones.service';

describe('DescripcionesService', () => {
  let service: DescripcionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DescripcionesService],
    }).compile();

    service = module.get<DescripcionesService>(DescripcionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
