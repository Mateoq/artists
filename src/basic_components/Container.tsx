import styled, { css } from "styled-components";

import { mq } from "../styles/media";

const Container = styled.section`
  margin: 0 auto;
  max-width: 100%;
  padding-top: 2rem;

  ${mq('md', css`
    max-width: 720px;
  `)}

  ${mq('lg', css`
    max-width: 960px;
  `)}

  ${mq('xl', css`
    max-width: 1140px;
  `)}
`;

export default Container;
