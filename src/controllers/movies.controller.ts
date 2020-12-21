import { Request, Response } from 'express';
import { Movie } from './../entity/Movie';
import { MoviesService } from '../services/movies.service';

export class MoviesController {
  moviesService: MoviesService;
  constructor() {
    this.moviesService = new MoviesService();
  }

  public getMovies = async (req: Request, res: Response): Promise<void> => {
    const movies: Movie[] = await this.moviesService.getAllMovies();
    res.json(movies).status(200);
  };
}
