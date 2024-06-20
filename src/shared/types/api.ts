export type PaginationResponse<T> = {
  docs: T[];
  limit: number;
  page: number;
  pages: number;
  total: number;
};

export enum QUERIES {
  page = "page",
  limit = "limit",
  decade = "decade",
  genres = "genres.name",
  year = "year",
  rating = "rating.imdb",
}
