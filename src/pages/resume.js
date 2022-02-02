import React from 'react'
import { graphql } from 'gatsby';
import { UserCard, UserHeader, Chip, ExperienceCard } from '../components';

const Resume = ({
  data
}) => {
  return (
    <UserCard>
      <UserHeader>Resume</UserHeader>
      <div className="my-7 px-5">
        <div>
          <div className="my-4"><span className="text-2xl">Education</span></div>
          <Chip>2013-2017</Chip>
          <div>
            Uttarakhand Technical University, Dehradun
          </div>
        </div>
      </div>
      <hr/>
      <div className="mt-10 px-5">
        <div>
          <div className="my-4"><span className="text-2xl">Experience</span></div>
          <div className="flex">
            {
              data?.site?.siteMetadata?.experiences.map((
                experience
              ) => (
                <ExperienceCard
                  className="max-w-[32%] mx-2"
                  {
                    ...experience
                  }
                />
              ))
            }
          </div>
        </div> 
      </div>
    </UserCard>
  )
}
export const query = graphql`
  query Resume {
    site {
      siteMetadata {
        intro
        experiences {
          year
          designation
          responsiblities
        }
      }
    }
  }
`;
export default Resume;
