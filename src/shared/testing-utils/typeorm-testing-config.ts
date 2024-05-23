/* archivo src/shared/testing-utils/typeorm-testing-config.ts*/
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscusionEntity } from '../../discusion/discusion.entity/discusion.entity';
import { LibroEntity } from '../../libro/libro.entity/libro.entity';
import { UsuarioEntity } from '../../usuario/usuario.entity/usuario.entity';
import { ComentarioEntity } from '../../comentario/comentario.entity/comentario.entity';
import { ClubEntity } from '../../club/club.entity/club.entity';
import { TagEntity } from '../../tag/tag.entity/tag.entity';

export const TypeOrmTestingConfig = () => [
    TypeOrmModule.forRoot({
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        entities: [DiscusionEntity, LibroEntity, UsuarioEntity, ComentarioEntity, ClubEntity, TagEntity],
        synchronize: true,
        keepConnectionAlive: true
    }),
    TypeOrmModule.forFeature([DiscusionEntity, LibroEntity, UsuarioEntity, ComentarioEntity, ClubEntity, TagEntity])
];
/* archivo src/shared/testing-utils/typeorm-testing-config.ts*/