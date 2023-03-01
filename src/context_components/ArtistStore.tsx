import React, {
  useContext,
  useEffect,
  useState
} from 'react';
import { noop } from 'lodash';

import {
  Artist,
  ArtistsFavMap,
  SelectOption
} from '../types';
import { keys } from '../constants';

export interface ArtistStoreContext {
  genre: SelectOption | null;
  favorites: Artist[];
  addFavorite(artist: Artist): void;
  removeFavorite(artistId: number): void;
  setGenre(genre: SelectOption): void;
}

export const ArtistsStoreContext = React.createContext<ArtistStoreContext>({
  genre: null,
  favorites: [],
  addFavorite: noop,
  removeFavorite: noop,
  setGenre: noop
});

export interface ArtistsStoreProviderProps {
  children?: React.ReactNode;
}

function saveFavorites(favorites: ArtistsFavMap) {
  localStorage.setItem(keys.FAVORITES_LIST, JSON.stringify(favorites));
}

function loadFavorites(): Artist[] {
  const strData = localStorage.getItem(keys.FAVORITES_LIST);
  let result = null;

  if (strData && typeof strData === 'string') {
    result = JSON.parse(strData);
  }

  return result;
}

export const ArtistsStoreProvider: React.FC<ArtistsStoreProviderProps> = (props) => {
  const [genre, setGenre] = useState<SelectOption | null>(null);
  const [favorites, setFavorites] = useState<Artist[]>([]);

  const addFavorite = (artist: Artist) => {
    const newState = favorites.concat(artist);
    setFavorites(newState);
    saveFavorites(newState);
  };

  const removeFavorite = (artistId: number) => {
    const newState = favorites.filter((fav) => (fav.id !== artistId));
    setFavorites(newState);
    saveFavorites(newState);
  };

  useEffect(() => {
    const favs = loadFavorites();

    if (favs) {
      setFavorites(favs);
    }
  }, []);

  return (
    <ArtistsStoreContext.Provider
      value={{
        genre,
        favorites,
        addFavorite,
        removeFavorite,
        setGenre
      }}
    >
      {props.children}
    </ArtistsStoreContext.Provider>
  );
};

export const useArtistsStore = () => (useContext(ArtistsStoreContext));
