import { Column, Entity, JoinColumn, Long, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProyectoEntity } from 'src/proyecto/proyecto.entity/proyecto.entity';

@Entity()
export class EstudianteEntity {
    @PrimaryGeneratedColumn()
    id: Long


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
