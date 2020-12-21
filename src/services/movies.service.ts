import { Movie } from './../entity/Movie';
import { getManager } from 'typeorm';

export class MoviesService {
  public getAllMovies = async (): Promise<Movie[]> => {
    const movies = await getManager().find(Movie);
    return movies;
  }
}
