import React from 'react';
import styled from "styled-components";

import {
  Color,
  TextType,
  SelectOption
} from '../types';
import { colorProp, fontTypeProp } from '../styles/utils';

const SelectWrapper = styled.div`
  display: flex;
  height: 3.8rem;
  min-width: 26.8rem;
  position: relative;

  &::after {
    background-color: ${colorProp(Color.GRAY_900)};
    content: "";
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    display: block;
    height: .8rem;
    position: absolute;
    right: 0.7rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.2rem;
  }
`;

const StyledSelect = styled.select`
  ${fontTypeProp(TextType.PARAGRAPH)};

  align-items: center;
  appearance: none;
  background: ${colorProp(Color.GRAY_700)};
  border: 0.1rem solid ${colorProp(Color.GRAY_700)};
  border-radius: 0.4rem;
  color: ${colorProp(Color.WHITE)};
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: space-between;
  outline: 0;
  padding: 0.7rem;
  position: relative;
  transition: border-color .2s ease;
  width: 100%;

  &:active,
  &:focus {
    border-color: ${colorProp(Color.GRAY_900)};
    outline: 0;
  }
`;

export interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
}

const Select: React.FC<SelectProps> = (props) => {
  const { options, ...restProps } = props;

  return (
    <SelectWrapper>
      <StyledSelect {...restProps}>
        {options.map((option, index) => (
          <option value={option.value} key={`option_${index}_${option.value}`}>
            {option.text}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default Select;
