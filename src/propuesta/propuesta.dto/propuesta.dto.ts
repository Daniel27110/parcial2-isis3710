import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class PropuestaDTO {

    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

    @IsUrl()
    @IsNotEmpty()
    readonly url: string;
}
