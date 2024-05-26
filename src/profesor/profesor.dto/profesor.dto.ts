import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProfesorDto {

    @IsNumber()
    @IsNotEmpty()
    readonly cedula: number;

    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

    @IsString()
    @IsNotEmpty()
    readonly grupoInvestigacion: string;

    @IsNumber()
    @IsNotEmpty()
    readonly numeroDeExtensión: number;
}