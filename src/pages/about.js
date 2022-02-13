import { graphql } from 'gatsby';
import React from 'react'
import { UserCard, UserHeader, StatsGrid } from '../components';

const About = ({
  data
}) => {
  console.log(data,'-data--');
  return (
    <UserCard>
      <div>
        <UserHeader>About Me</UserHeader>
        <div className="mt-5 px-5">
          <p className="text-xl">I'm <b>Ravi Chhetri</b>, <span className="font-typewriter">Web Developer | Traveller | Foodie</span></p>
          <p className="text-md mt-5 font-typewriter leading-9">
            {data?.site?.siteMetadata?.intro??''}
          </p>
        </div>
        {/* <div className="flex px-5 mt-5">
          <div className="w-2/3">
            <StatsGrid/>
          </div>
          <div className="w-1/3">What I do</div>
        </div> */}
      </div>
    </UserCard>
  )
}

export const query = graphql`
  query HomePageQuery1 {
    site {
      siteMetadata {
        intro
      }
    }
  }
`;

export default About;
