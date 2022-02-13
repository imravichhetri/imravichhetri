import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react"
import styled from "styled-components";
import {
  Text,
  FlexContainer,
  FlexElement
} from "../components";
import { StaticImage } from "gatsby-plugin-image";

const NameText = styled(Text)`
  /* color: var(--secondary-yellow); */
  position: absolute;
  right: 10%;
  left: 30%;
`
const App = ({
  data
}) => {
  return (
    <FlexContainer hCenter vCenter className="full-height">
      <FlexElement hCenter column position="relative">
        <NameText>
          <div className="font-helvetica uppercase text-xl font-bold">HI There!</div>
          <Text large>
            I'm <span className="text-secondary-yellow two-line-font">Ravi</span>
          </Text>
          <div className="bg-secondary-yellow rounded-md px-2 py-1 inline-block">Software Engineer | Traveller | Foodie</div>
          <div className="text-sm my-2">
            {data?.site?.siteMetadata?.intro??''}
          </div>
          <div className="mt-6">
            <Link to="/about" className="cursor-pointer bg-secondary-yellow font-helvetica rounded-full text-primary-white uppercase text-sm p-2">
              More About Me
            </Link>
          </div>
        </NameText>
      </FlexElement>
      <FlexElement className="h-full">
        <StaticImage
          src="../images/profile.jpg"
          alt="Profile image"
          placeholder="blurred"
          layout="fullWidth"
          className="w-full"
        />
      </FlexElement>
    </FlexContainer>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        intro
      }
    }
  }
`;
export default App
