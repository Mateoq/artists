import React, { useCallback } from 'react';

import ArtistsList from '../basic_components/ArtistsList';
import Div from '../basic_components/Div';
import Text from '../basic_components/Text';
import TopNav from '../complex_components/TopNav';
import { useArtistsStore } from '../context_components/ArtistStore';
import {
  Artist,
  TextAlignment,
  TextElement,
  TextType
} from '../types';


const FavoriteArtists: React.FC = () => {
  const { favorites, removeFavorite } = useArtistsStore();
  const hasFavorites = (favorites && Array.isArray(favorites) && favorites.length);

  const removeFavList = useCallback((artist: Artist) => {
    removeFavorite(artist.id);
  }, [favorites, removeFavorite]);

  return (
    <>
      <TopNav hideLink/>
      <Div css={`margin-top: 2rem;`}>
        <Text
          as={TextElement.H1}
          type={TextType.HEADING1}
          alignment={TextAlignment.CENTER}
        >
          My List
        </Text>
        <Div css={`margin-top: 1.5rem;`}>
          {(hasFavorites) ? (
            <ArtistsList
              list={favorites}
              favorites={favorites}
              onClickAction={removeFavList}
            />
          ) : (
            <Text
              as={TextElement.PARAGRAPH}
              type={TextType.PARAGRAPH2}
              alignment={TextAlignment.CENTER}
            >
              No Artist In List
            </Text>
          )}
        </Div>
      </Div>
    </>
  );
};

export default FavoriteArtists;
