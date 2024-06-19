import { TMovie } from "@/entities";

const FAVORITE_MOVIES = "movies";

export const useFavoriteStorage = () => {};

class FavoriteStorage {
  constructor() {
    if (!localStorage.getItem(FAVORITE_MOVIES)) {
      localStorage.setItem(FAVORITE_MOVIES, JSON.stringify([]));
    }
  }

  private setFavorites(movies: TMovie[]) {
    localStorage.setItem(FAVORITE_MOVIES, JSON.stringify(movies));
  }

  private getFavoriteMovieById(id: number) {
    return this.getFavorites().find((favoriteMovie) => favoriteMovie.id === id);
  }

  getFavorites(): TMovie[] {
    return JSON.parse(localStorage.getItem(FAVORITE_MOVIES));
  }

  addFavoriteMovie(newMovie: TMovie) {
    let favorites = this.getFavorites();

    const clearIdFavorites = favorites.filter(
      (movieOld) => movieOld.id !== newMovie.id
    );
    this.setFavorites([...clearIdFavorites, newMovie]);
  }

  isMovieFavorite(id: number) {
    return !!this.getFavoriteMovieById(id);
  }

  removeFavoriteMovie(id: number) {
    let favorites = this.getFavorites();
    const clearIdFavorites = favorites.filter((movieOld) => movieOld.id !== id);
    this.setFavorites(clearIdFavorites);
  }
}

export const favoriteMovieStorage = new FavoriteStorage();
