type TGenre = {
  name: string;
};

export type TMovie = {
  rating: number;
  id: number;
  name: string;
  description: string;
  year: number;
  poster: string | null;
  genres: TGenre[];
};
