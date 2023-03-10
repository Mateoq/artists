import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Container from './basic_components/Container';
import Artists from './pages/Artists';
import ArtistDetail from './pages/ArtistDetail';
import FavoriteArtists from './pages/FavoriteArtists';
import { ArtistsStoreProvider } from './context_components/ArtistStore';
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

const queryClient = new QueryClient();

const  App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles/>
          <ArtistsStoreProvider>
            <Container>
              <RouterProvider router={router} />
            </Container>
          </ArtistsStoreProvider>
        </>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
