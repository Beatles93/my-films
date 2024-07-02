import create from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteVideo {
  id: number;
  title: string;
  poster_path: string;
}

interface FavoriteStore {
  favorites: FavoriteVideo[];
  addToFavorites: (movie: FavoriteVideo) => void;
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

