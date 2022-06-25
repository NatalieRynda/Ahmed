import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: true })
    email: string;

    @Column({ default: true })
    phone: string;

    @Column({ default: true })
    address: string;

    @Column({ default: true })
    city: string;

    @Column({ default: true })
    state: string;

    @Column({ default: true })
    zip: string;

    @Column({ default: true })
    isActive: boolean;
}