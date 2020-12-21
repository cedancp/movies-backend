import { MoviesService } from './../services/movies.service';

jest.mock('./../services/movies.service', () => {
  return {
    MoviesService: jest.fn().mockImplementation(() => {
      return {
        getAllMovies: jest.fn().mockReturnValue([
          {
            id: 'uuidmovie1',
            title: 'Back to the future',
            coverUrl: 'test-cover-url',
          },
        ]),
      };
    }),
  };
});
