import React from 'react';
import { useParams } from 'react-router-dom';

export interface ArtistDetailParams extends Record<string, string | undefined> {
  id: string;
}

const ArtistDetail: React.FC = () => {
  const { id } = useParams<ArtistDetailParams>();

  return (
    <h1>Artist Detail: {id}</h1>
  );
};

export default ArtistDetail;
