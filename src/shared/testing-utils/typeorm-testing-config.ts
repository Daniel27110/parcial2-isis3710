/* archivo src/shared/testing-utils/typeorm-testing-config.ts*/
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteEntity } from '../../estudiante/estudiante.entity/estudiante.entity';
import { ProfesorEntity } from '../../profesor/profesor.entity/profesor.entity';
import { PropuestaEntity } from '../../propuesta/propuesta.entity/propuesta.entity';
import { ProyectoEntity } from '../../proyecto/proyecto.entity/proyecto.entity';


export const TypeOrmTestingConfig = () => [
    TypeOrmModule.forRoot({
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        entities: [EstudianteEntity, ProfesorEntity, PropuestaEntity, ProyectoEntity],
        synchronize: true,
        keepConnectionAlive: true
    }),
    TypeOrmModule.forFeature([EstudianteEntity, ProfesorEntity, PropuestaEntity, ProyectoEntity])
];
/* archivo src/shared/testing-utils/typeorm-testing-config.ts*/