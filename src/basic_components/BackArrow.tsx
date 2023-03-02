import React from 'react';
import styled from 'styled-components';

import { Color } from '../types';
import { colorProp } from '../styles/utils';

export interface BackArrowProps {
  className?: string;
}

const PreStyledBackArrow: React.FC<BackArrowProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"/>
  </svg>
);

const BackArrow = styled(PreStyledBackArrow)`
  fill: ${colorProp(Color.WHITE)};
`;

export default BackArrow;
