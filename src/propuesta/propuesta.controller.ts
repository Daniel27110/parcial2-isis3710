import { Body, Controller, Delete, Get, HttpCode, Param, Post, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors/business-errors.interceptor';
import { PropuestaService } from './propuesta.service';
import { plainToInstance } from 'class-transformer';
import { PropuestaEntity } from './propuesta.entity/propuesta.entity';
import { PropuestaDto } from './propuesta.dto/propuesta.dto';

@Controller('propuestas')
@UseInterceptors(BusinessErrorsInterceptor)
export class PropuestaController {
    constructor(private readonly propuestaService: PropuestaService) { }

    @Post()
    async crearPropuesta(@Body() propuestaDto: PropuestaDto) {
        const propuesta: PropuestaEntity = plainToInstance(PropuestaEntity, propuestaDto);
        return await this.propuestaService.crearPropuesta(propuesta);
    }

    @Get(':id')
    async findPropuestaById(@Param('id') id: number) {
        return this.propuestaService.findPropuestaById(id);
    }

    @Get()
    async findAllPropuesta() {
        return this.propuestaService.findAllPropuesta();
    }

    @Delete(':id')
    @HttpCode(204)
    async deletePropuesta(@Param('id') id: number) {
        return this.propuestaService.deletePropuesta(id);
    }
}