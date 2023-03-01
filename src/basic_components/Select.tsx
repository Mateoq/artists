import React from 'react';
import ReactSelect from 'react-select';
import { useTheme } from 'styled-components';

import { SelectChangeCB, SelectOption } from '../types';

export interface SelectProps {
  options: SelectOption[];
  onChange: SelectChangeCB;
}

const Select: React.FC<SelectProps> = (props) => {
  const { options, onChange } = props;
  const theme = useTheme();

  return (
    <ReactSelect
      options={options}
      isSearchable
      onChange={(value) => onChange(value as SelectOption)}
      getOptionLabel={(option) => (option.text)}
      getOptionValue={(option) => (option.value.toString())}
      styles={{
        control: (base, state) => ({
          ...base,
          backgroundColor: theme.colors.gray700,
          border: '.1rem solid',
          borderColor: (state.isFocused) ? theme.colors.gray900 : theme.colors.gray700,
          color: theme.colors.white,
          cursor: 'pointer',
          transition: 'border-color .2s ease',
          outline: 0,
          '&:hover': {
            outline: 0
          },
          '&:active': {
            outline: 0
          }
        }),
        placeholder: (base) => ({
          ...base,
          color: theme.colors.gray200,
          fontSize: theme.fontSizes.paragraph,
          lineHeight: theme.lineHeights.paragraph
        }),
        input: (base) => ({
          ...base,
          color: theme.colors.white,
          fontSize: theme.fontSizes.paragraph,
          lineHeight: theme.lineHeights.paragraph
        }),
        indicatorSeparator: (base) => ({
          ...base,
          backgroundColor: theme.colors.white
        }),
        dropdownIndicator: (base) => ({
          ...base,
          color: theme.colors.white,
          '&:hover': {
            color: theme.colors.gray900
          }
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: theme.colors.gray900,
          border: 0
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: (state.isSelected) ? theme.colors.gray800 : theme.colors.gray900,
          color: theme.colors.white,
          cursor: 'pointer',
          fontSize: theme.fontSizes.paragraph2,
          lineHeight: theme.lineHeights.paragraph2,
          padding: '1rem .8rem',
          '&:hover': {
            backgroundColor: theme.colors.gray800
          }
        }),
        noOptionsMessage: (base) => ({
          ...base,
          color: theme.colors.gray400,
          fontSize: theme.fontSizes.paragraph2,
          lineHeight: theme.lineHeights.paragraph2
        }),
        singleValue: (base) => ({
          ...base,
          color: theme.colors.white,
          fontSize: theme.fontSizes.paragraph,
          lineHeight: theme.lineHeights.paragraph
        })
      }}
    />
  );
};

export default Select;
