import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class ProyectoDto {

    @IsDate()
    @IsNotEmpty()
    readonly fechaFin: Date;

    @IsDate()
    @IsNotEmpty()
    readonly fechaInicio: Date;

    @IsString()
    @IsNotEmpty()
    readonly url: string;
}