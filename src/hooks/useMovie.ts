import { useState, useCallback } from 'react';
import Toast from 'react-native-toast-message';

import { IMovie } from '~/dtos/MovieDTO';

import { tmdb, defaultSuffix } from '~/services/tmdb';

export function useMovie() {
  const [isLoading, setIsLoading] = useState(false);

  const [popularMovies, setPopularMovies] = useState<IMovie[]>([]);
  const [trendingMovies, setTrendingMovies] = useState<IMovie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<IMovie[]>([]);
  const [allMovies, setAllMovies] = useState<IMovie[]>([]);
  const [surpriseMovie, setSurpriseMovie] = useState({} as IMovie);

  const getMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      const popular = await tmdb.get(`/movie/popular${defaultSuffix}&page=1`);
      const trending = await tmdb.get(`/trending/all/day${defaultSuffix}`);
      const upcoming = await tmdb.get(`/movie/upcoming${defaultSuffix}&page=1`);

      Promise.all([popular, trending, upcoming]).then(response => {
        setPopularMovies(response[0].data.results);
        setTrendingMovies(response[1].data.results);
        setUpcomingMovies(response[2].data.results);
        setAllMovies([
          ...response[0].data.results,
          ...response[1].data.results,
          ...response[2].data.results,
        ]);
      });
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: 'Não foi possível carregar os dados.',
        text2: 'Tente novamente mais tarde.',
      });

      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getMovieDetail = useCallback(async (movieId: number) => {
    try {
      setIsLoading(true);
      const recommendations = await tmdb.get(
        `/movie/${movieId}/recommendations${defaultSuffix}&page=1`,
      );
      const detail = await tmdb.get(`/movie/${movieId}${defaultSuffix}&page=1`);

      const movie = Promise.all([recommendations, detail]).then(response => {
        const stage = response[1].data;
        const movieDetail = {
          ...stage,
          recommendations: response[0].data.results,
        };

        return movieDetail;
      });

      return movie;
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: 'Não foi possível carregar os dados.',
        text2: 'Tente novamente mais tarde.',
      });

      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getRandomMovie = async () => {
    try {
      const response = await tmdb.get(`/trending/all/day${defaultSuffix}`);
      const trending = response.data.results;

      const randomIndex = Math.floor(Math.random() * trending.length);
      const movieId = trending[randomIndex - 1].id;

      const movie = await getMovieDetail(movieId);
      setSurpriseMovie(movie);
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: 'Não foi possível obter um filme no momento.',
        text2: 'Tente novamente mais tarde.',
      });

      return {} as IMovie;
    }
  };

  return {
    getMovies,
    getMovieDetail,
    getRandomMovie,
    isLoading,
    popularMovies,
    trendingMovies,
    upcomingMovies,
    allMovies,
    surpriseMovie,
  };
}
