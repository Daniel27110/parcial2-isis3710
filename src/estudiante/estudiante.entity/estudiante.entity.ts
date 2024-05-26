import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProyectoEntity } from '../../proyecto/proyecto.entity/proyecto.entity';

@Entity()
export class EstudianteEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    codigo: string

    @Column()
    creditosAprobados: number


    @OneToOne(() => ProyectoEntity, proyecto => proyecto.estudiante)
    @JoinColumn()
    proyecto: ProyectoEntity


}
