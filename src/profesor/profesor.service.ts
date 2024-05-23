import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Long, Repository } from 'typeorm';
import { ProfesorEntity } from './profesor.entity/profesor.entity';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';

@Injectable()
export class profuestaService {
    constructor(
        @InjectRepository(ProfesorEntity)
        private profRepository: Repository<ProfesorEntity>
    ) { }


    async findProfesorById(id: Long): Promise<ProfesorEntity> {
        const prof: ProfesorEntity = await this.profRepository.findOne({ where: { id }, relations: ['propuestas'] });
        if (!prof) {
            throw new BusinessLogicException("The profosal with the given id was not found", BusinessError.NOT_FOUND);
        }
        return prof;
    }

    async crearProfesor(prof: ProfesorEntity): Promise<ProfesorEntity> {

        const grupos: string[] = ["TICSW", "IMAGINE", "COMIT"]

        if (!grupos.includes(prof.grupoInvestigacion)) {
            throw new BusinessLogicException("the research group must be either TICSW, IMAGINE or COMIT", BusinessError.PRECONDITION_FAILED);
        }

        return await this.profRepository.save(prof);
    }


    async eliminarProfesorPorId(id: Long) {
        const prof: ProfesorEntity = await this.profRepository.findOne({ where: { id } });
        if (!prof) {
            throw new BusinessLogicException("The profosal with the given id was not found", BusinessError.NOT_FOUND);
        }


        for (var prop of prof.propuestas) {
            if (prop.proyecto != null) {
                throw new BusinessLogicException("A proposal with a project can not be deleted", BusinessError.PRECONDITION_FAILED);
            }
        }

        await this.profRepository.remove(prof);
    }

    async eliminarProfesorPorCedula(cedula: number) {
        const prof: ProfesorEntity = await this.profRepository.findOne({ where: { cedula } });
        if (!prof) {
            throw new BusinessLogicException("The profosal with the given id was not found", BusinessError.NOT_FOUND);
        }

        for (var prop of prof.propuestas) {
            if (prop.proyecto != null) {
                throw new BusinessLogicException("A proposal with a project can not be deleted", BusinessError.PRECONDITION_FAILED);
            }
        }

        await this.profRepository.remove(prof);
    }
}