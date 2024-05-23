import { Module } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';

@Module({
  providers: [ProyectoService],
  imports: [TypeOrmModule.forFeature([ProyectoEntity])]
})
export class ProyectoModule { }