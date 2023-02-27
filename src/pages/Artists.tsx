import React from 'react';

import Div from '../basic_components/Div';
// import Select from '../basic_components/SelectNative';
import Select from '../basic_components/Select';
import { newSelectOption } from '../helpers';

const options = [
  newSelectOption('123', 'Rock'),
  newSelectOption('5124', 'Pop')
];

const Artists: React.FC = () => {
  return (
    <>
      <h1>Artists</h1>
      <Div css={`max-width: 23rem;`}>
        <Select
          options={options}
        />
      </Div>
    </>
  );
};

export default Artists;
