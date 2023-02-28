import React from 'react';

import ArtistCard from '../basic_components/ArtistCard';
import Container from '../basic_components/Container';
import Div from '../basic_components/Div';
import Select from '../basic_components/Select';
import { useGenresQuery } from '../queries';
import { newArtist } from '../helpers';
import { mapGenres } from '../utils';

const artist = newArtist(
  24,
  'Taj Mahal',
  'https:\/\/i.scdn.co\/image\/23abc0acc4732626a3cbb727ad79f56a46e19cd6',
  54,
  [{ id: 2, name: 'Blues', is_primary: true }]
);

const Artists: React.FC = () => {
  const { data: { data } } = useGenresQuery();
  const genres = mapGenres(data);

  return (
    <Container>
      <h1>Artists</h1>
      <Div css={`max-width: 23rem;`}>
        <Select
          options={genres}
          onChange={(option) => console.log(option)}
        />
      </Div>
      <Div css={`margin-top: 3rem;`}>
        <ArtistCard
          data={artist} onClickFav={(a) => console.log(a)}
        />
      </Div>
    </Container>
  );
};

export default Artists;
