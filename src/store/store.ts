import create from "zustand";
import { persist } from "zustand/middleware";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface FavoriteStore {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (id: number) => void;
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set) => ({
      favorites: [],
      addToFavorites: (movie) => set((state) => ({ favorites: [...state.favorites, movie] })),
      removeFromFavorites: (id) => set((state) => ({ favorites: state.favorites.filter(movie => movie.id !== id) })),
    }),
    {
      name: "favorite-movies", 
    }
  )
);

