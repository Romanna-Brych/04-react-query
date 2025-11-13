import axios from 'axios';
import type { Movie } from '../types/movie';

interface MoviesHttpResponse {
  results: Movie[];
  page: number;
  total_pages: number;
}

async function fetchMovies(
  query: string,
  page: number
): Promise<MoviesHttpResponse> {
  const response = await axios.get<MoviesHttpResponse>(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query,
        page,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    }
  );
  return response.data;
}

export default fetchMovies;
