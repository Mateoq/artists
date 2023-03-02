import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import BackArrow from '../basic_components/BackArrow';
import Button from '../basic_components/Button';
import Div from '../basic_components/Div';
import Text from '../basic_components/Text';
import { TextElement, TextType } from '../types';
import { redirectPaths } from '../constants';

const TopNavContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: .4rem 2rem;
`;

export interface TopNavProps {
  hideBack?: boolean;
  hideLink?: boolean;
}

const TopNav: React.FC<TopNavProps> = (props) => {
  const { hideBack, hideLink } = props;

  return (
    <TopNavContainer>
      {(hideBack) ? (<Div/>) : (
        <Button as={Link} to={redirectPaths.ARTISTS_LIST}>
          <BackArrow/> &nbsp; Back to Search
        </Button>
      )}
      {!hideLink && (
        <Link to={redirectPaths.FAVORITE_ARTISTS}>
          <Text as={TextElement.SPAN} type={TextType.PARAGRAPH} underlined>
            View My List
          </Text>
        </Link>
      )}
    </TopNavContainer>
  );
};

export default TopNav;
