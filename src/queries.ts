import { useQuery } from 'react-query';
import axios from 'axios';

import { api } from './constants';

export const useGenresQuery = () => {
  return useQuery(['genres'], async () => {
    return await axios.get(api.GENRES).then((res) => (res.data));
  });
};

export const useArtistByGenreQuery = (genreId: number) => {
  return useQuery(['artistsByGenre', genreId], async () => {
    return await axios.get(api.ARTISTS_BY_GENRE(genreId))
      .then((res) => (res.data));
  });
};

export const useArtistDetailQuery = (artistId: number) => {
  return useQuery(['artist', artistId], async () => {
    return await axios.get(api.ARTIST_DETAIL(artistId))
      .then((res) => (res.data));
  });
};

export const useSimilarArtistsQuery = (artistId: number) => {
  return useQuery(['similarArtists', artistId], async () => {
    return await axios.get(api.SIMILAR_ARTISTS(artistId))
      .then((res) => (res.data));
  });
};
