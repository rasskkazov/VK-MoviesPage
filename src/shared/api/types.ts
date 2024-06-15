export type PaginationResponse<T> = {
  docs: T[];
  limit: number;
  page: number;
  pages: number;
  total: number;
};
