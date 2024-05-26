import { EstudianteEntity } from '../../estudiante/estudiante.entity/estudiante.entity';
import { PropuestaEntity } from '../../propuesta/propuesta.entity/propuesta.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProyectoEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fechaInicio: Date

    @Column()
    fechaFin: Date

    @Column()
    url: string


    @OneToOne(() => PropuestaEntity, propuesta => propuesta.proyecto)
    @JoinColumn()
    propuesta: PropuestaEntity

    @OneToOne(() => EstudianteEntity, estudiante => estudiante.proyecto)
    @JoinColumn()
    estudiante: EstudianteEntity
}