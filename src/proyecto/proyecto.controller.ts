import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors/business-errors.interceptor';
import { ProyectoService } from './proyecto.service';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';
import { ProyectoDto } from './proyecto.dto/proyecto.dto';
import { plainToInstance } from 'class-transformer';

@Controller('proyectos')
@UseInterceptors(BusinessErrorsInterceptor)
export class ProyectoController {
    constructor(private readonly proyectoService: ProyectoService) { }

    @Post()
    async crearProyecto(@Body() proyectoDto: ProyectoDto) {
        const proyecto: ProyectoEntity = plainToInstance(ProyectoEntity, proyectoDto);
        return await this.proyectoService.crearProyecto(proyecto);
    }
}