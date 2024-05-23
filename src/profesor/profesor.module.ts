import { Module } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesorEntity } from './profesor.entity/profesor.entity';

@Module({
  providers: [ProfesorService],
  imports: [TypeOrmModule.forFeature([ProfesorEntity])]
})
export class ProfesorModule { }