export type IMovie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  genres: [{ id: number; name: string }];
  runtime: number;
  recommendations: IMovie[];
};

export type IFavoriteMovie = IMovie & {
  userId: string;
};
