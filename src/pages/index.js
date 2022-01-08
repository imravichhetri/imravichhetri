import * as React from "react"
import styled from "styled-components";
import {
  Text,
  FlexContainer,
  FlexElement
} from "../components";
import '../styles/style.css';

const NameText = styled(Text)`
  /* color: var(--secondary-yellow); */
  position: absolute;
  right: 10%;
`
const App = () => {
  return (
    <FlexContainer hCenter vCenter className="full-height">
      <FlexElement hCenter column position="relative">
        <NameText>
          <div>HI There!</div>
          <Text large>
            I'm <span className="secondary-yellow two-line-font">ravi</span>
          </Text>
        </NameText>
      </FlexElement>
      <FlexElement>Photo</FlexElement>
    </FlexContainer>
  )
}

export default App
