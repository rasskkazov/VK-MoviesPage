import { MovieCard } from "@/entities";
import { API_TOKEN } from "@/shared/api/token";

export const Movies = () => {
  console.log(API_TOKEN);

  return (
    <div style={{ display: "flex" }}>
      <MovieCard
        name="Бесславные ублюдки"
        poster="https://image.openmoviedb.com/kinopoisk-images/1599028/335d24e3-7df7-4fa5-8ff6-f44e42bede21/orig"
        rating={6.9}
        year={1969}
      />
      <MovieCard
        name="Бесславные ублюдки Бесславные ублюдки B tot 8"
        poster="https://image.openmoviedb.com/kinopoisk-images/1898899/0f64d70b-0b65-4bea-bb92-18f08304021a/orig"
        rating={6.9}
        year={1969}
      />
    </div>
  );
};
