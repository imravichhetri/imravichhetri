import React from 'react'
import styled from 'styled-components';

const FlexContainer= styled.div`
  display: flex;
  flex-direction: ${props=> props.column? 'column':'row'};
  justify-content: ${props=>props.hCenter? "center": "initial"};
  align-items: ${props=>props.vCenter? "center": "initial"};
`;


export default FlexContainer;
