import React from 'react'
import styled from 'styled-components';

const Text = styled.span`
  font-size: ${props=> props.large? "32px" : (props.md ? "16px": "12px")};
  @media only screen and (min-width: 768px) {
    font-size: ${props => props.large? "48px" : (props.md ? "32px": "16px")}
  }
`;

export default Text;
