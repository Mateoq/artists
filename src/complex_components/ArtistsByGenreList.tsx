import React, { useCallback } from 'react';

import ArtistsList from '../basic_components/ArtistsList';
import { useArtistsStore } from '../context_components/ArtistStore';
import { useArtistByGenreQuery } from '../queries';
import { Artist } from '../types';

const ArtistsByGenreList: React.FC = () => {
  const {
    genre,
    favorites,
    addFavorite,
    removeFavorite
  } = useArtistsStore();
  const { data, isLoading } = useArtistByGenreQuery(genre?.value ?? -1);
  const isDataAvailable = (data && data.length > 0);

  const toggleFavList = useCallback((artist: Artist) => {
    if (favorites.find((fav) => (fav.id === artist.id))) {
      removeFavorite(artist.id);
    } else {
      addFavorite(artist);
    }
  }, [favorites, addFavorite, removeFavorite]);

  const artists: Artist[] = data?.data ?? [];

  return (
    <ArtistsList
      list={artists}
      isLoading={(isLoading || isDataAvailable)}
      favorites={favorites}
      onClickAction={toggleFavList}
    />
  );
};

export default ArtistsByGenreList;
