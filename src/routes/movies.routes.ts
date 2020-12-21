import express from 'express';
import { MoviesController } from './../controllers/movies.controller';

export class MoviesRoutes {
  app: express.Application;
  controller: MoviesController;

  constructor(app: express.Application) {
    this.app = app;
    this.controller = new MoviesController();
    this.configureRoute();
  }

  configureRoute = (): void => {
    this.app.route('/movies').get(this.controller.getMovies);
    this.app.route('/movieDetail/:movieId').get(this.controller.getMovieDetail);
  };
}
