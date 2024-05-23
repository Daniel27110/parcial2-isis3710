import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesorModule } from './profesor/profesor.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { PropuestaModule } from './propuesta/propuesta.module';
import { ProyectoModule } from './proyecto/proyecto.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'bookspace',
    entities: [], // todas las entidades que se creen en la aplicación
    dropSchema: true,
    synchronize: true,
    keepConnectionAlive: true
  }), ProfesorModule, EstudianteModule, PropuestaModule, ProyectoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
