import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PropuestaEntity } from './propuesta.entity/propuesta.entity';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';

@Injectable()
export class PropuestaService {
    constructor(
        @InjectRepository(PropuestaEntity)
        private propRepository: Repository<PropuestaEntity>
    ) { }

    async findAllPropuesta(): Promise<PropuestaEntity[]> {
        return await this.propRepository.find({ relations: ["profesor", "proyecto"] });
    }

    async findPropuestaById(id: number): Promise<PropuestaEntity> {
        const prop: PropuestaEntity = await this.propRepository.findOne({ where: { id }, relations: ["profesor", "proyecto"] });
        if (!prop) {
            throw new BusinessLogicException("The proposal with the given id was not found", BusinessError.NOT_FOUND);
        }
        return prop;
    }

    async crearPropuesta(prop: PropuestaEntity): Promise<PropuestaEntity> {

        if (prop.titulo == null || prop.titulo == "") {
            throw new BusinessLogicException("The title of the proposal can not be empty", BusinessError.PRECONDITION_FAILED)
        }

        return await this.propRepository.save(prop);
    }


    async deletePropuesta(id: number) {
        const prop: PropuestaEntity = await this.propRepository.findOne({ where: { id } });
        if (!prop) {
            throw new BusinessLogicException("The proposal with the given id was not found", BusinessError.NOT_FOUND);
        }

        if (prop.proyecto != null) {
            throw new BusinessLogicException("A proposal with a project can not be deleted", BusinessError.PRECONDITION_FAILED);
        }

        await this.propRepository.remove(prop);
    }
}