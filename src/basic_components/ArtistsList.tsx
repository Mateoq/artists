import React from 'react';
import styled from 'styled-components';

import ArtistCard from '../basic_components/ArtistCard';
import Text from '../basic_components/Text';
import {
  Artist,
  ArtistHandlerCB,
  TextAlignment,
  TextElement,
  TextType
} from '../types';

const ArtistsGrid = styled.div`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: min-content min-content;
  grid-template-rows: auto;
  justify-content: center;
  row-gap: 1rem;
`;

const ArtistsMessage = styled.div`
  display: flex;
  justify-content: center;
`;

export interface ArtistsListProps {
  list: Artist[];
  isLoading?: boolean;
  favorites: Artist[];
  onClickAction: ArtistHandlerCB;
}

const ArtistsList: React.FC<ArtistsListProps> = (props) => {
  const {
    list,
    isLoading,
    favorites,
    onClickAction
  } = props;

  if (isLoading) {
    return (
      <ArtistsMessage>
        <Text
          as={TextElement.H2}
          type={TextType.HEADING1}
          alignment={TextAlignment.CENTER}
        >
          {(isLoading) ? 'Loading Artists...' : 'No Artists Available'}
        </Text>
      </ArtistsMessage>
    );
  }

  return (
    <ArtistsGrid>
      {list.map((artist: Artist) => {
        const isFav = !!favorites.find((fav) => (fav.id === artist.id));

        return (
          <ArtistCard
            key={`artist_${artist.id}`}
            data={artist}
            isFav={isFav}
            onClickFav={onClickAction}
          />
        );
      })}
    </ArtistsGrid>
  );
};

export default ArtistsList;
