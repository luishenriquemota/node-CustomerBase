import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Client } from "./client.entity";

@Entity("contact")
export class Contacts{
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column({nullable:true})
  email: string;

  @Column({nullable:true})
  telephone:string;

  @ManyToOne(type => Client, client => client.contacts, {eager: true, onDelete: "CASCADE"})
  client: Client
}