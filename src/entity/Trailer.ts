import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { MovieDetail } from './MovieDetail';

@Entity()
export class Trailer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  trailerUrl: string;

  @ManyToOne(() => MovieDetail, movieDetail => movieDetail.trailers)
  movieDetail: MovieDetail;
}
