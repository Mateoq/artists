import styled from 'styled-components';
import { prop } from 'styled-tools';

import { componentProps } from '../constants';

export interface DivProps {
  css?: string;
}

const Div = styled.div<DivProps>`
  ${prop(componentProps.CSS)};
`;

export default Div;
