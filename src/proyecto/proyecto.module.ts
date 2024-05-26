import { Module } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';
import { ProyectoController } from './proyecto.controller';

@Module({
  providers: [ProyectoService],
  imports: [TypeOrmModule.forFeature([ProyectoEntity])],
  controllers: [ProyectoController]
})
export class ProyectoModule { }