import { MovieDetail } from './../entity/MovieDetail';
import { Movie } from './../entity/Movie';
import { getManager } from 'typeorm';

export class MoviesService {
  public getAllMovies = async (): Promise<Movie[]> => {
    const movies = await getManager().find(Movie);
    return movies;
  }

  public getMovie = async (id: string): Promise<MovieDetail> => {
    const movieDetail = await getManager().findOne(MovieDetail, id, {relations: ['trailers']});
    return movieDetail;
  }
}
