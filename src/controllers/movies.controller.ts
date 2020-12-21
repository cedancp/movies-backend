import { MovieDetail } from './../entity/MovieDetail';
import { Request, Response } from 'express';
import { Movie } from './../entity/Movie';
import { MoviesService } from '../services/movies.service';

export class MoviesController {
  moviesService: MoviesService;
  constructor() {
    this.moviesService = new MoviesService();
  }

  public getMovies = async (req: Request, res: Response): Promise<Response> => {
    try {
      const movies: Movie[] = await this.moviesService.getAllMovies();
      return res.json(movies).status(200);
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
  };

  public getMovieDetail = async (req: Request, res: Response): Promise<Response> => {
    try {
      const movieId = req.params.movieId;
      const movieDetail: MovieDetail = await this.moviesService.getMovie(movieId);

      if (movieDetail) {
        return res.json(movieDetail).status(200);
      } else {
        return res.json({
          message: 'Movie not found'
        }).status(200);
      }
    } catch (error) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
  };
}
