import React from 'react';
import ReactSelect, { components } from 'react-select';
import styled from 'styled-components';

import { Color, SelectOption } from '../types';
import { colorProp } from '../styles/utils';

const Control = styled.div`
  align-items: center;
  background: ${colorProp(Color.GRAY_700)};
  border: 0.1rem solid ${colorProp(Color.GRAY_700)};
  border-radius: 0.4rem;
  color: ${colorProp(Color.WHITE)};
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: space-between;
  outline: 0;
  position: relative;
  transition: border-color .2s ease;
  width: 100%;

  &:active,
  &:focus {
    border-color: ${colorProp(Color.GRAY_900)};
    outline: 0;
  }
`;

const SelectPlaceholder = styled(components.Placeholder)`
  color: ${colorProp(Color.WHITE)};
  grid-area: 1/1/2/3;
  margin-left: 2px;
  margin-right: 2px;
`;

const SelectInput = styled(components.Input)`
  color: ${colorProp(Color.WHITE)};
`;

export interface SelectProps {
  options: SelectOption[];
}

const Select: React.FC<SelectProps> = (props) => {
  const { options } = props;

  return (
    <ReactSelect
      options={options}
      isSearchable
      components={{
        Control: ({ children }) => (
          <Control>
            {children}
          </Control>
        ),
        ClearIndicator: ({ children, ...rest }) => (
          <components.ClearIndicator {...rest}>
            Clear
            {children}
          </components.ClearIndicator>
        ),
        Placeholder: ({ children, ...rest }) => (
          <SelectPlaceholder {...rest}>
            {children}
          </SelectPlaceholder>
        ),
        Input: ((SelectInput as unknown) as typeof components.Input)
      }}
    />
  );
};

export default Select;
