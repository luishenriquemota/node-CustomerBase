import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Contacts } from "./contacts.entity";


@Entity("client")
export class Client{
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({unique: true})
  email: string;

  @Column()
  telephone: string;

  @CreateDateColumn()
  created_at: Date; 

  @OneToMany(type => Contacts, contacts => contacts.client)
  contacts: Contacts[]
}