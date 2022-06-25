import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    phone: string;

    @Column({ nullable: true })
    address: string;

    @Column()
    city: string;

    @Column({ nullable: true })
    state: string;

    @Column({ nullable: true })
    zip: string;

    @Column({ nullable: true })
    isActive: boolean;
}