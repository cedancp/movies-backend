import { movieDetailData, moviesData } from './../../__mocks__/dataMocks';
import supertest from 'supertest';
import express from 'express';
import { App } from '../../App';
import moviesServiceMock from '../../__mocks__/movies.service.mock';

describe('Movies controller', () => {
  let app: express.Application;
  beforeEach(() => {
    app = new App().startServer();
  });

  it('should return a list of movies and 200 code', done => {
    supertest(app).get('/movies').expect('Content-Type', /json/).expect(200, moviesData, done);
  });

  it('should return 500 error code when database services fails', done => {
    moviesServiceMock.mockGetAllMovies.mockImplementationOnce(() => {
      throw new Error();
    });
    supertest(app).get('/movies').expect(
      500,
      {
        message: 'Something went wrong',
      },
      done,
    );
  });

  it('should return movie detail and 200 code', done => {
    supertest(app).get('/movieDetail/3').expect('Content-Type', /json/).expect(200, movieDetailData, done);
  });

  it('should return 404 error code when movie id not in url', done => {
    supertest(app).get('/movieDetail').expect(404, done);
  });

  it('should return message "Movie not found" and 200 code when the movie is not on db', done => {
    moviesServiceMock.mockGetMovie.mockImplementationOnce(() => {
      return undefined;
    });
    supertest(app).get('/movieDetail/30').expect('Content-Type', /json/).expect(
      200,
      {
        message: 'Movie not found',
      },
      done,
    );
  });

  it('should return 500 error code when database services fails on movieDetail', done => {
    moviesServiceMock.mockGetMovie.mockImplementationOnce(() => {
      throw new Error();
    });
    supertest(app).get('/movieDetail/5').expect(
      500,
      {
        message: 'Something went wrong',
      },
      done,
    );
  });
});
