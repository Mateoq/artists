import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Artists from './pages/Artists';
import ArtistDetail from './pages/ArtistDetail';
import FavoriteArtists from './pages/FavoriteArtists';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import { paths } from './constants';

const router = createBrowserRouter([
  {
    path: paths.ARTISTS_LIST,
    element: <Artists/>
  },
  {
    path: paths.ARTIST_DETAIL,
    element: <ArtistDetail/>
  },
  {
    path: paths.FAVORITE_ARTISTS,
    element: <FavoriteArtists/>
  }
]);

const  App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
        <RouterProvider router={router} />
        <h1>Hello</h1>
      </>
    </ThemeProvider>
  );
};

export default App;
