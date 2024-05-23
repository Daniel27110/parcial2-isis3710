import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';
import { Long, Repository } from 'typeorm';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';

@Injectable()
export class ProyectoService {
    constructor(
        @InjectRepository(ProyectoEntity)
        private readonly proyRepository: Repository<ProyectoEntity>
    ) { }



    async crearProyecto(proy: ProyectoEntity): Promise<ProyectoEntity> {


        if (proy.fechaFin <= proy.fechaInicio) {
            throw new BusinessLogicException("The project ending date must go after the project beggining date", BusinessError.PRECONDITION_FAILED)
        }

        return await this.proyRepository.save(proy);
    }


}