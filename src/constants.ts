export const paths = {
  ARTISTS_LIST: '/',
  ARTIST_DETAIL: '/artist/:id',
  FAVORITE_ARTISTS: '/favorite'
};

export const componentProps = {
  ACTIVE: 'active',
  ALIGNMENT: 'alignment',
  AS: 'as',
  CSS: 'css',
  DISPLAY_ONLY: 'displayOnly',
  ELLIPSIS: 'ellipsis',
  ERROR: 'error',
  IS_HEADING: 'isHeading',
  LAST: 'last',
  OPEN: 'open',
  SECONDARY: 'secondary',
  SHOW: 'show',
  UNDERLINED: 'underlined'
};

const API_URL = 'https://music.musicaudience.info';

export const api = {
  GENRES: `${API_URL}/api/v1/music/genres?apikey=${import.meta.env.VITE_API_KEY}`,
  ARTISTS_BY_GENRE: (id: number) => (`${API_URL}/api/v1/music/genres/${id}/artists?apikey=${import.meta.env.VITE_API_KEY}`),
  ARTIST_DETAIL: (id: number) => (`${API_URL}/api/v1/music/artists/${id}?apikey=${import.meta.env.VITE_API_KEY}`),
  SIMILAR_ARTISTS: (id: number) => (`${API_URL}/api/v1/music/artists/${id}/similar?apikey=${import.meta.env.VITE_API_KEY}`)
};
