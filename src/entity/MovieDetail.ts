import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Trailer } from './Trailer';

@Entity()
export class MovieDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  coverUrl: string;

  @Column('text')
  description: string;

  @Column('date')
  releaseDate: Date;

  @Column()
  duration: number;

  @Column()
  qualification: number;

  @OneToMany(() => Trailer, trailer => trailer.movieDetail)
  trailers: Trailer[];
}
