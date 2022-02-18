import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react"

import { StaticImage } from "gatsby-plugin-image";

const App = ({
  data
}) => {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex relative justify-center flex-col h-full flex-1">
        <span className="absolute right-1/10 left-1/4">
          <div className="font-helvetica uppercase text-xl font-bold">HI There!</div>
            <div className="font-typewriter text-6xl">
              I'm <span className="text-secondary-yellow two-line-font">Ravi</span>
            </div>
          <div className="bg-secondary-yellow rounded-md px-2 py-1 inline-block">Software Engineer | Traveller | Foodie</div>
          <div className="text-sm my-2 font-typewriter">
            {data?.site?.siteMetadata?.intro??''}
          </div>
          <div className="mt-6">
            <Link to="/about" className="cursor-pointer bg-secondary-yellow font-helvetica rounded-full text-primary-white uppercase text-sm p-2">
              More About Me
            </Link>
          </div>
        </span>
      </div>
      <div className="flex h-full flex-1">
        <StaticImage
          src="../images/profile.jpg"
          alt="Profile image"
          placeholder="blurred"
          layout="fullWidth"
          className="w-full"
        />
      </div>
    </div>
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
