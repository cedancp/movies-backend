import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { MovieDetail } from './MovieDetail';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => MovieDetail)
  @JoinColumn()
  movieDetail: MovieDetail;
  
  @Column()
  title: string;

  @Column()
  coverUrl: string;
}
