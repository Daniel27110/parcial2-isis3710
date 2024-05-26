import { Module } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesorEntity } from './profesor.entity/profesor.entity';
import { ProfesorController } from './profesor.controller';

@Module({
  providers: [ProfesorService],
  imports: [TypeOrmModule.forFeature([ProfesorEntity])],
  controllers: [ProfesorController]
})
export class ProfesorModule { }