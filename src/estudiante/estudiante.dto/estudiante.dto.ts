import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class EstudianteDto {

    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

    @IsString()
    @IsNotEmpty()
    readonly codigo: string;

    @IsNumber()
    @IsNotEmpty()
    readonly creditosAprobados: number;
}