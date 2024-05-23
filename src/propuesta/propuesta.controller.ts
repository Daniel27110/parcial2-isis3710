import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors/business-errors.interceptor';
import { PropuestaService } from './propuesta.service';
import { PropuestaDTO } from './propuesta.dto/propuesta.dto';
import { PropuestaEntity } from './propuesta.entity/propuesta.entity';
import { plainToInstance } from 'class-transformer';

@Controller('Propuestas')
@UseInterceptors(BusinessErrorsInterceptor)
export class PropuestaController {
    constructor(private readonly PropuestaService: PropuestaService) { }

    @Get()
    async findAll() {
        return this.PropuestaService.findAllPropuesta();
    }

}
