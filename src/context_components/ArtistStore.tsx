import React from 'react';
import { noop } from 'lodash';

import { Artist, ArtistsFavMap } from '../types';

export interface ArtistStoreContext {
  genreId: number | null;
  favorites: ArtistsFavMap;
  addFavorite(artist: Artist): void;
  removeFavorite(artistId: number): void;
  setGenreId(genreId: number): void;
}

const { Provider } = React.createContext<ArtistStoreContext>({
  genreId: null,
  favorites: {},
  addFavorite: noop,
  removeFavorite: noop,
  setGenreId: noop
});

const ArtistsStoreProvider =
