export type PaginationResponse<T> = {
  docs: T[];
  limit: number;
  page: number;
  pages: number;
  total: number;
};

export type UpdateFiltersAction =
  | {
      type: "UPDATE_GENRES";
      payload: string[];
    }
  | {
      type: "UPDATE_DECADE" | "UPDATE_YEAR" | "UPDATE_RATING";
      payload: string | null;
    };

// export const KinopQueries = {
//   page: "page",
//   genres: "genres.name",
//   year: "year",
//   rating: "rating.imdb",
// };

// export type KinopQueries = {
//   page: string | null;
//   "genres.name": string[];
//   year: string | null;
//   rating: string | null;
// };
export enum QUERIES {
  page = "page",
  decade = "decade",
  genres = "genres.name",
  year = "year",
  rating = "rating.imdb",
}
