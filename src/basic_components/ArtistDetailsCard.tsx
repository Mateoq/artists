import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import Div from './Div';
import Text from './Text';
import {
  Artist,
  ButtonType,
  Color,
  FontWeight,
  TextElement,
  TextType
} from '../types';
import { colorProp } from '../styles/utils';

const ArtistDetailContainer = styled.div`
  display: flex;
  column-gap: 2rem;
`;

const ArtistDetailImageContainer = styled.div`
  background-color: ${colorProp(Color.DIM)};
  border-radius: .4rem;
  height: 30rem;
  width: 30rem;
`;

const ArtistDetailImage = styled.img`
  height: 100%;
  object-fit: contain;
  padding: .4rem;
  width: 100%;
`;

const ArtistInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: .8rem 0;
  row-gap: 1.2rem;
`;

export interface ArtistDetailsCardProps {
  data: Artist;
  isFav?: boolean;
  onClickFav(): void;
}

const ArtistDetailsCard: React.FC<ArtistDetailsCardProps> = (props) => {
  const { data, isFav, onClickFav } = props;
  const genre = data.genres.find((g) => (g.is_primary));
  const restGenres = data.genres
    .filter((g) => (!g.is_primary))
    .map((g) => (g.name))
    .join(', ');

  return (
    <ArtistDetailContainer>
      <ArtistDetailImageContainer>
        <ArtistDetailImage src={data.image} alt={data.name}/>
      </ArtistDetailImageContainer>
      <ArtistInfoContainer>
        <Text
          as={TextElement.H2}
          type={TextType.HEADING2}
          weight={FontWeight.MEDIUM}
        >
          {data.name}
        </Text>
        {genre && (
          <Text
            as={TextElement.PARAGRAPH}
            type={TextType.PARAGRAPH}
          >
            Primary Genre: {genre.name}
          </Text>
        )}
        <Text
          as={TextElement.PARAGRAPH}
          type={TextType.PARAGRAPH}
        >
          Popularity Score: {data.popularity}
        </Text>
        {restGenres && restGenres.length && (
          <Text
            as={TextElement.PARAGRAPH}
            type={TextType.PARAGRAPH}
          >
            Aditional Genres: {restGenres}
          </Text>
        )}
        <Div>
          <Button type={ButtonType.REGULAR} onClick={onClickFav}>
            {(isFav) ? 'Remove' : 'Add'}
          </Button>
        </Div>
      </ArtistInfoContainer>
    </ArtistDetailContainer>
  );
};

export default ArtistDetailsCard;
