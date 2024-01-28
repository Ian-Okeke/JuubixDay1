import {  BeforeInsert, Column, Entity, PrimaryGeneratedColumn  } from "typeorm";

import * as bcrypt from 'bcrypt'

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, unique: true})
    name: String;
    
    @Column({nullable: false, unique: true})
    email: String;

    @Column()
    password: String;

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password, 10)
    }

}