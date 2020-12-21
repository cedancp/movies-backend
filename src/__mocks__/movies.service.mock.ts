import { movieDetailData, moviesData } from './dataMocks';

const mockGetAllMovies = jest.fn();
const mockGetMovie = jest.fn();

jest.mock('./../services/movies.service', () => {
  return {
    MoviesService: jest.fn().mockImplementation(() => {
      return {
        getAllMovies: mockGetAllMovies.mockImplementation(() => moviesData),
        getMovie: mockGetMovie.mockImplementation(() => movieDetailData),
      };
    }),
  };
});

export default {
  mockGetAllMovies,
  mockGetMovie,
};
