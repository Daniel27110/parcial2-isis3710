import { Column, Entity, Long, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProfesorEntity } from 'src/profesor/profesor.entity/profesor.entity';
import { ProyectoEntity } from 'src/proyecto/proyecto.entity/proyecto.entity';

@Entity()
export class PropuestaEntity {
    @PrimaryGeneratedColumn()
    id: Long


    @Column()
    titulo: string

    @Column()
    descripcion: string

    @Column()
    palabraClave: string


    @ManyToOne(() => ProfesorEntity, profeseor => profeseor.propuestas)
    profesor: ProfesorEntity

    @OneToOne(() => ProyectoEntity, proyecto => proyecto.propuesta)
    proyecto: ProyectoEntity
}
