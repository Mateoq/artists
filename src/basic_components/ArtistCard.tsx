import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from './Button';
import Text from './Text';
import {
  Artist,
  ArtistHandlerCB,
  Color,
  TextAlignment,
  TextElement,
  TextType
} from '../types';
import { colorProp } from '../styles/utils';
import { redirectPaths } from '../constants';

const ArtistContainer = styled.div`
  background-color: ${colorProp(Color.GRAY_900)};
  border-radius: .4rem;
  display: flex;
  column-gap: 1.8rem;
  height: 12rem;
  padding: 1.2rem;
  width: 42rem;
`;

const ArtistImageContainer = styled.div`
  background-color: ${colorProp(Color.DIM)};
  border-radius: .3rem;
  height: 100%;
  padding: .2rem;
  width: 10rem;
`;

const ArtistImage = styled.img`
  height: 100%;
  object-fit: contain;
  width: 100%;
`;

const ArtistDetails = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  row-gap: .5rem;
`;

const ArtistNameButton = styled(Link)`

`;

const ArtistActionContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 10rem;
`;

export interface ArtistCardProps {
  data: Artist;
  isFav?: boolean;
  onClickFav: ArtistHandlerCB;
}

const ArtistCard: React.FC<ArtistCardProps> = (props) => {
  const {
    data,
    isFav,
    onClickFav
  } = props;
  const genre = data.genres.find((genre) => (genre.is_primary));

  return (
    <ArtistContainer>
      <ArtistImageContainer>
        <ArtistImage src={data.image} alt={data.name} />
      </ArtistImageContainer>
      <ArtistDetails>
        <ArtistNameButton to={redirectPaths.ARTIST_DETAIL(data.id)}>
          <Text
            as={TextElement.PARAGRAPH}
            type={TextType.PARAGRAPH}
            alignment={TextAlignment.CENTER}
          >
            {data.name}
          </Text>
        </ArtistNameButton>
        {genre && (
          <Text
            as={TextElement.PARAGRAPH}
            type={TextType.PARAGRAPH2}
            alignment={TextAlignment.CENTER}
          >
            {genre.name}
          </Text>
        )}
      </ArtistDetails>
      <ArtistActionContainer>
        <Button onClick={() => (onClickFav(data))} secondary>
          {(isFav) ? 'Remove' : 'Add'}
        </Button>
      </ArtistActionContainer>
    </ArtistContainer>
  );
};

export default ArtistCard;
