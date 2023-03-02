import React, { useEffect, useState } from 'react';

import Div from '../basic_components/Div';
import Select from '../basic_components/Select';
import Text from '../basic_components/Text';
import ArtistsByGenreList from '../complex_components/ArtistsByGenreList';
import TopNav from '../complex_components/TopNav';
import { useArtistsStore } from '../context_components/ArtistStore';
import { useGenresQuery } from '../queries';
import {
  SelectOption,
  TextElement,
  TextType
} from '../types';
import { mapGenres } from '../utils';

const Artists: React.FC = () => {
  const { data } = useGenresQuery();
  const [genres, setGenres] = useState<SelectOption[]>([]);
  const { setGenre } = useArtistsStore();

  useEffect(() => {
    if (data) {
      setGenres(mapGenres(data.data));
    }
  }, [data]);

  return (
    <>
      <TopNav hideBack/>
      <Text as={TextElement.PARAGRAPH} type={TextType.PARAGRAPH}>
        Select a genre to show you some artists:
      </Text>
      <Div css={`margin-top: 1.5rem; max-width: 30rem;`}>
        <Select
          options={genres}
          onChange={setGenre}
        />
      </Div>
      <Div css={`margin-top: 3rem;`}>
        <ArtistsByGenreList/>
      </Div>
    </>
  );
};

export default Artists;
