import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';
import { ProyectoService } from './proyecto.service';
import { faker } from '@faker-js/faker';

describe('ProyectoService', () => {
  let service: ProyectoService;
  let repository: Repository<ProyectoEntity>;
  let proyectosList: ProyectoEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [ProyectoService],
    }).compile();

    service = module.get<ProyectoService>(ProyectoService);
    repository = module.get<Repository<ProyectoEntity>>(getRepositoryToken(ProyectoEntity));
    await seedDatabase();
  });

  const seedDatabase = async () => {
    repository.clear();
    proyectosList = [];
    for (let i = 0; i < 5; i++) {
      let fecha1 = faker.date.recent();
      let fecha2 = faker.date.recent();
      while (fecha1 >= fecha2) {
        fecha1 = faker.date.recent();
        fecha2 = faker.date.recent();
      }
      const proyecto: ProyectoEntity = await repository.save({
        fechaInicio: fecha1,
        fechaFin: fecha2,
        url: faker.word.sample(),
      })
      proyectosList.push(proyecto);
    }
  }

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('crearProyecto should return a new proyecto', async () => {
    const proyecto: ProyectoEntity = {
      id: 0,
      fechaInicio: faker.date.past(),
      fechaFin: faker.date.recent(),
      url: faker.word.sample(),
      estudiante: null,
      propuesta: null,
    }

    const newProyecto: ProyectoEntity = await service.crearProyecto(proyecto);
    expect(newProyecto).not.toBeNull();

    const storedProyecto: ProyectoEntity = await repository.findOne({ where: { id: newProyecto.id } })
    expect(storedProyecto).not.toBeNull();
    expect(proyecto.fechaInicio).toEqual(storedProyecto.fechaInicio)
    expect(proyecto.fechaFin).toEqual(storedProyecto.fechaFin)
    expect(proyecto.url).toEqual(storedProyecto.url)
  });

  it('crearProyecto should throw an exception for an invalid proyecto', async () => {
    const proyecto: ProyectoEntity = {
      id: 0,
      fechaInicio: faker.date.recent(),
      fechaFin: faker.date.past(),
      url: faker.word.sample(),
      estudiante: null,
      propuesta: null,
    }

    await expect(() => service.crearProyecto(proyecto)).rejects.toHaveProperty("message", "The project ending date must go after the project beggining date")
  });


});