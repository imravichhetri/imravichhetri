import React from 'react'
import styled from 'styled-components';
import { FlexContainer } from '.';

const FlexElement = styled(FlexContainer)`
  flex: ${props=> props.flex||1};
  font-family: 'Special Elite', cursive;
  position: ${ props=> props.position || 'initial' };
`;

export default FlexElement;
