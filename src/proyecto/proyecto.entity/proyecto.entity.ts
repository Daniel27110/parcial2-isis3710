import { EstudianteEntity } from 'src/estudiante/estudiante.entity/estudiante.entity';
import { PropuestaEntity } from 'src/propuesta/propuesta.entity/propuesta.entity';
import { Column, Entity, Long, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProyectoEntity {
    @PrimaryGeneratedColumn()
    id: Long

    @Column()
    fechaInicio: Date

    @Column()
    fechaFin: Date

    @Column()
    url: string


    @OneToOne(() => PropuestaEntity, propuesta => propuesta.proyecto)
    propuesta: PropuestaEntity

    @OneToOne(() => EstudianteEntity, estudiante => estudiante.proyecto)
    estudiante: EstudianteEntity
}