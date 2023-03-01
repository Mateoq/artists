import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useArtistDetailQuery } from '../queries';

const 

export interface ArtistDetailParams extends Record<string, string | undefined> {
  id: number;
}

const ArtistDetail: React.FC = () => {
  const { id } = useParams<ArtistDetailParams>();
  const { data, isLoading } = useArtistDetailQuery(id);

  if (isLoading)

  return (
    <
    <h1>Artist Detail: {id}</h1>
  );
};

export default ArtistDetail;
