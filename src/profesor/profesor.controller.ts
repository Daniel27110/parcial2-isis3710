import { Body, Controller, Delete, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors/business-errors.interceptor';
import { ProfesorService } from './profesor.service';
import { ProfesorDto } from './profesor.dto/profesor.dto';
import { ProfesorEntity } from './profesor.entity/profesor.entity';
import { plainToInstance } from 'class-transformer';

@Controller('profesores')
@UseInterceptors(BusinessErrorsInterceptor)
export class ProfesorController {
    constructor(private readonly profesorService: ProfesorService) { }

    @Post()
    async crearProfesor(@Body() profesorDto: ProfesorDto) {
        const profesor: ProfesorEntity = plainToInstance(ProfesorEntity, profesorDto);
        return await this.profesorService.crearProfesor(profesor);
    }

    @Get(':id')
    async findProfesorById(@Param('id') id: number) {
        return this.profesorService.findProfesorById(id);
    }

    @Delete(':id')
    async eliminarProfesorId(@Param('id') id: number) {
        return this.profesorService.eliminarProfesorPorId(id);
    }

    @Delete(':cedula')
    async eliminarProfesorCedula(@Param('cedula') cedula: number) {
        return this.profesorService.eliminarProfesorPorCedula(cedula);
    }

}