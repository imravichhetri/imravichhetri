import React from 'react'
import { graphql } from 'gatsby';
import { UserCard, UserHeader, Chip, ExperienceCard } from '../components';
import { StaticImage } from 'gatsby-plugin-image';

const Resume = ({
  data
}) => {
  return (
    <UserCard>
      <UserHeader>Resume</UserHeader>
      <a className="absolute bottom-2 right-2 cursor-pointer" href="/Resume-Ravindra Chhetri.pdf" download>
        <StaticImage
            src="../images/icons/download.svg"
            alt="Download Icon"
            placeholder="blurred"
            width="30"
            className="h-full w-full overflow-hidden d-block"
          />
      </a>
      <div className="my-7 px-5">
        <div>
          <div className="my-4"><span className="text-2xl">Education</span></div>
          <div className="flex">
            {
              data?.site?.siteMetadata?.educations.map((
                education
              ) => (
                <ExperienceCard
                  key={education.year}
                  className="mx-2"
                  {
                    ...education
                  }
                />
              ))
            }
          </div>
        </div>
      </div>
      <hr/>
      <div className="mt-10 px-5 xl:mt-5">
        <div>
          <div className="my-4"><span className="text-2xl">Experience</span></div>
          <div className="flex">
            {
              data?.site?.siteMetadata?.experiences.map((
                experience
              ) => (
                <ExperienceCard
                  key={experience.year}
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
        educations {
          year
          designation
        }
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
