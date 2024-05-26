import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Long, Repository } from 'typeorm';
import { EstudianteEntity } from './estudiante.entity/estudiante.entity';

@Injectable()
export class EstudianteService {
    constructor(
        @InjectRepository(EstudianteEntity)
        private readonly usuarioRepository: Repository<EstudianteEntity>
    ) { }


    async findEstudianteById(id: number): Promise<EstudianteEntity> {
        const usuario: EstudianteEntity = await this.usuarioRepository.findOne({ where: { id }, relations: ["proyecto"] });
        if (!usuario)
            throw new BusinessLogicException("The student with the given id was not found", BusinessError.NOT_FOUND);

        return usuario;
    }

    async crearEstudiante(usuario: EstudianteEntity): Promise<EstudianteEntity> {


        if (usuario.codigo.length != 10) {
            throw new BusinessLogicException("The user code must have 10 characters", BusinessError.PRECONDITION_FAILED)
        }

        return await this.usuarioRepository.save(usuario);
    }


}