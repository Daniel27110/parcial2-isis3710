import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteEntity } from './estudiante.entity/estudiante.entity';
import { EstudianteController } from './estudiante.controller';

@Module({
  providers: [EstudianteService],
  imports: [TypeOrmModule.forFeature([EstudianteEntity])],
  controllers: [EstudianteController]
})
export class EstudianteModule { }