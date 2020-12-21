import supertest from 'supertest';
import express from 'express';
import { App } from '../../App';

describe('Movies controller', () => {
  let app: express.Application;
  beforeEach(() => {
    app = new App().startServer();
  });

  it('should return a list of movies and 200 code', (done) => {
    supertest(app)
      .get('/movies')
      .expect('Content-Type', /json/)
      .expect(
        200,
        [{
            id: 'uuidmovie1',
            title: 'Back to the future',
            coverUrl: 'test-cover-url',
        }],
        done,
      );
  });
});
