import { useQuery } from 'react-query';
import axios from 'axios';

import { api } from './constants';

export const useGenresQuery = () => {
  return useQuery(['genres'], () => {
    return axios.get(api.GENRES).then((res) => (res.data));
  });
};

export const useArtistByGenreQuery = (genreId: number) => {
  return useQuery(['artistsByGenre', genreId], () => {
    return axios.get(api.ARTISTS_BY_GENRE(genreId))
      .then((res) => (res.data));
  });
};

export const useArtistDetailQuery = (artistId: number) => {
  return useQuery(['artist', artistId], () => {
    return axios.get(api.ARTIST_DETAIL(artistId))
      .then((res) => (res.data));
  });
};

export const useSimilarArtistsQuery = (artistId: number) => {
  return useQuery(['similarArtists', artistId], () => {
    return axios.get(api.SIMILAR_ARTISTS(artistId))
      .then((res) => (res.data));
  });
};
