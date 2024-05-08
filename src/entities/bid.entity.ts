import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Item } from "./item.entity";


@Entity()
export class Bid{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, unique: true})
    amount: number;

    @ManyToOne((type) => User, (user) => user.id)
    user: User;

    @ManyToOne((type) => Item, (item) => item.id)
    item: Item;
}
