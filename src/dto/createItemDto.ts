import { IsString, IsNumber } from "class-validator";

export class CreateItemDto{

    @IsString()
    name: String;

    @IsString()
    description: String;

    @IsNumber()
    qty: number;

}
