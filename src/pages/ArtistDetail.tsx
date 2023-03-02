import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import ArtistDetailsCard from '../basic_components/ArtistDetailsCard';
import Div from '../basic_components/Div';
import Text from '../basic_components/Text';
import RelatedArtistsList from '../complex_components/RelatedArtistsList';
import TopNav from '../complex_components/TopNav';
import { useArtistsStore } from '../context_components/ArtistStore';
import { Artist, TextAlignment, TextElement, TextType } from '../types';
import { useArtistDetailQuery } from '../queries';

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export interface ArtistDetailParams extends Record<string, string | undefined> {
  id: string;
}

const ArtistDetail: React.FC = () => {
  const { id } = useParams<ArtistDetailParams>();
  const artistId = (id) ? parseInt(id, 10) : -1;
  const { data, isLoading, isError } = useArtistDetailQuery(artistId);
  const { favorites, addFavorite, removeFavorite } = useArtistsStore();
  const hasError = (data && data.errors && data.errors.length);

  const clickFavHandler = useCallback(() => {
    if (data && data.data.length) {
      const [artist] = data.data as Artist[];

      if (favorites && !!favorites.find((fav) => (fav.id === artist.id))) {
        removeFavorite(artist.id);
      } else {
        addFavorite(artist);
      }
    }

  }, [data, favorites, addFavorite, removeFavorite]);

  if (isError || hasError) {
    return (
      <MessageContainer>
        <Text
          as={TextElement.H1}
          type={TextType.LARGE_HEADING}
          alignment={TextAlignment.CENTER}
        >
          Artist Not Found
        </Text>
      </MessageContainer>
    );
  }

  if (isLoading) {
    return (
      <MessageContainer>
        <Text
          as={TextElement.H1}
          type={TextType.LARGE_HEADING}
          alignment={TextAlignment.CENTER}
        >
          Loading Artist Info...
        </Text>
      </MessageContainer>
    );
  }

  console.log('DATA', data);
  const [artist] = data.data as Artist[];
  const isFav = !!(favorites.find((fav) => (fav.id === artist.id)));

  return (
    <>
      <TopNav/>
      <DetailContainer>
        <ArtistDetailsCard
          data={artist}
          isFav={isFav}
          onClickFav={clickFavHandler}
        />
      </DetailContainer>
      <Div css={`margin-top: 3rem; padding-left: 12rem;`}>
        <Text as={TextElement.PARAGRAPH} type={TextType.PARAGRAPH}>
          Related Artists:
        </Text>
      </Div>
      <Div css={`margin-top: 2rem;`}>
        <RelatedArtistsList artistId={artistId}/>
      </Div>
    </>
  );
};

export default ArtistDetail;
