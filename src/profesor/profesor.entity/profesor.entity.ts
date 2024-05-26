import { PropuestaEntity } from '../../propuesta/propuesta.entity/propuesta.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProfesorEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    cedula: number

    @Column()
    nombre: string

    @Column()
    grupoInvestigacion: string

    @Column()
    numeroDeExtensión: number


    @OneToMany(() => PropuestaEntity, propuesta => propuesta.profesor)
    propuestas: PropuestaEntity[];
}
