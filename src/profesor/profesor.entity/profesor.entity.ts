import { PropuestaEntity } from 'src/propuesta/propuesta.entity/propuesta.entity';
import { Column, Entity, Long, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProfesorEntity {
    @PrimaryGeneratedColumn()
    id: Long

    @Column()
    cedula: number

    @Column()
    nombre: string

    @Column()
    grupoInvestigacion: string



    @OneToMany(() => PropuestaEntity, propuesta => propuesta.profesor)
    propuestas: PropuestaEntity[];
}
