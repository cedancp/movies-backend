import { MoviesRoutes } from './routes/movies.routes';
import 'reflect-metadata';
import express from 'express';
import * as http from 'http';

export class App {
  app: express.Application;

  public startServer(): express.Application {
    const PORT = 3000;
    this.app = express();
    const server: http.Server = http.createServer(this.app);

    //Routes
    new MoviesRoutes(this.app);

    if (process.env.NODE_ENV !== 'test') {
      server.listen(PORT, () =>
        // tslint:disable-next-line: no-console
        console.log(`Server is running on http://localhost:${PORT}`),
      );
    }

    return this.app;
  }
}
