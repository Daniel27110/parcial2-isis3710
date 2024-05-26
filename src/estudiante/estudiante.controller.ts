import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors/business-errors.interceptor';
import { EstudianteService } from './estudiante.service';
import { EstudianteEntity } from './estudiante.entity/estudiante.entity';
import { plainToInstance } from 'class-transformer';
import { EstudianteDto } from './estudiante.dto/estudiante.dto';
import { Long } from 'typeorm';

@Controller('estudiantes')
@UseInterceptors(BusinessErrorsInterceptor)
export class EstudianteController {
    constructor(private readonly estudianteService: EstudianteService) { }

    @Post()
    async crearEstudiante(@Body() estudianteDto: EstudianteDto) {
        const estudiante: EstudianteEntity = plainToInstance(EstudianteEntity, estudianteDto);
        return await this.estudianteService.crearEstudiante(estudiante);
    }

    @Get(':id')
    async findEstudianteById(@Param('id') id: Long) {
        return this.estudianteService.findEstudianteById(id);
    }
}