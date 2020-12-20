import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { MovieDetail } from './MovieDetail';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => MovieDetail)
  @Column()
  title: string;

  @Column()
  coverUrl: string;
}
