import { fetchDataV1 } from "@/shared/api/fetchData";
type TGenre = {
  name: string;
  slug: string;
};
export type TGenres = TGenre[];

const options = {
  params: {
    field: "genres.name",
  },
};

export const fetchGenreData = () =>
  fetchDataV1<TGenres>("movie/possible-values-by-field", options);
