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
      type: "UPDATE_YEAR" | "UPDATE_RATING";
      payload: string;
    };

export const KinopQueries = {
  page: "page",
  genres: "genres.name",
  year: "year",
  rating: "rating.imdb",
};
