import { TGenres } from "@/entities";
import { fetchDataV1 } from "@/shared/api/fetchData";

const options = {
  params: {
    field: "genres.name",
  },
};

export const fetchGenreData = () =>
  fetchDataV1<TGenres>("movie/possible-values-by-field", options);
