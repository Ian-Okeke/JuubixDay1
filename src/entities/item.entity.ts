import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("items")
export class Item{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, unique: true})
    name: String;
    
    @Column({nullable: true})
    description: String;

    @Column()
    qty: number;

}