type TPoster = {
  url: string;
  previewUrl: string;
};

type TGenre = {
  name: string;
};

export type TMovie = {
  rating: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  id: number;
  name: string | null;
  alternativeName: string | null;
  description: string;
  year: number;
  poster?: TPoster;
  genres: TGenre[];
};
